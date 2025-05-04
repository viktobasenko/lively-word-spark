
import { useState, useEffect } from 'react';
import Layout from '@/components/Layout';
import { toast } from 'sonner';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import EulaDialog from '@/components/EulaDialog';
import { 
  Form, 
  FormControl, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage 
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

// Form validation schema
const formSchema = z.object({
  name: z.string().min(2, { message: 'Имя должно содержать как минимум 2 символа' }),
  phone: z.string()
    .min(10, { message: 'Введите корректный номер телефона' })
    .refine((value) => /^\+?[0-9\s\-\(\)]+$/.test(value), {
      message: 'Номер телефона должен содержать только цифры, пробелы, дефисы и скобки'
    }),
  comment: z.string().optional(),
  age: z.string().min(1, { message: 'Выберите возраст ребёнка' }),
  activity: z.string().min(1, { message: 'Выберите направление' })
});

type FormValues = z.infer<typeof formSchema>;

const Register = () => {
  // Available activities based on age
  const [availableActivities, setAvailableActivities] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isEulaOpen, setIsEulaOpen] = useState(false);
  const [formCooldown, setFormCooldown] = useState(false);
  const [cooldownTime, setCooldownTime] = useState(0);
  
  // Check if cooldown is stored in localStorage
  useEffect(() => {
    const storedCooldown = localStorage.getItem('formCooldownUntil');
    if (storedCooldown) {
      const cooldownUntil = parseInt(storedCooldown, 10);
      const now = Date.now();
      
      if (cooldownUntil > now) {
        setFormCooldown(true);
        setCooldownTime(Math.ceil((cooldownUntil - now) / 1000));
      } else {
        localStorage.removeItem('formCooldownUntil');
      }
    }
  }, []);

  // Countdown timer
  useEffect(() => {
    if (!formCooldown) return;

    const timer = setInterval(() => {
      setCooldownTime((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(timer);
          setFormCooldown(false);
          localStorage.removeItem('formCooldownUntil');
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [formCooldown]);

  // Format cooldown time
  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
  };

  // Initialize form
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      phone: '',
      comment: '',
      age: '',
      activity: ''
    }
  });
  
  const { watch, setValue } = form;
  const age = watch('age');
  
  // Update available activities when age changes
  useEffect(() => {
    if (age === '2') {
      setAvailableActivities(['Фитнес']);
      setValue('activity', 'Фитнес');
    } else if (age === '3') {
      setAvailableActivities(['Фитнес', 'Ритмика']);
      setValue('activity', 'Фитнес');
    } else if (['4', '5', '6'].includes(age)) {
      setAvailableActivities(['Фитнес', 'Ритмика', 'Хореография', 'Гимнастика']);
      setValue('activity', 'Фитнес');
    } else {
      setAvailableActivities([]);
      setValue('activity', '');
    }
  }, [age, setValue]);

  // Open EULA dialog
  const handleOpenEula = () => {
    const result = form.trigger();
    if (result) {
      setIsEulaOpen(true);
    }
  };

  // Final form submission after EULA acceptance
  const handleEulaAccepted = async () => {
    const values = form.getValues();
    try {
      setIsSubmitting(true);
      
      // Telegram bot details
      const botToken = '7630359851:AAHWZMludhPdmNWLmoZBtCco3gpOjD7LFnU';
      const chatId = '-4769614826';
      
      // Format message
      const message = `**Новая заявка!**
Имя ребенка: ${values.name}
Телефон: ${values.phone}
Возраст: ${values.age} ${values.age === '1' ? 'год' : ['2', '3', '4'].includes(values.age) ? 'года' : 'лет'}
Направление: ${values.activity}
${values.comment ? `Комментарий: ${values.comment}` : ''}`;

      // Send to Telegram
      const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          chat_id: chatId,
          text: message,
          parse_mode: 'Markdown'
        })
      });

      const result = await response.json();
      
      if (result.ok) {
        toast.success('Заявка успешно отправлена! Мы свяжемся с вами в ближайшее время.');
        form.reset();
        
        // Set cooldown
        setFormCooldown(true);
        setCooldownTime(5 * 60); // 5 minutes in seconds
        const cooldownUntil = Date.now() + 5 * 60 * 1000;
        localStorage.setItem('formCooldownUntil', cooldownUntil.toString());
      } else {
        throw new Error('Ошибка при отправке заявки');
      }
    } catch (error) {
      console.error('Error sending message to Telegram:', error);
      toast.error('Произошла ошибка при отправке заявки. Пожалуйста, попробуйте еще раз позже.');
    } finally {
      setIsSubmitting(false);
      setIsEulaOpen(false);
    }
  };
  
  return (
    <Layout>
      <div className="w-full max-w-4xl mx-auto px-4 md:px-10 pt-10 md:pt-16 pb-16">
        <section className="mb-16 animate-on-scroll">
          <h1 className="text-3xl md:text-5xl font-bold mb-10 text-center">Записаться на занятия</h1>
          
          <div className="bg-white/80 dark:bg-fitkids-dark-blue/50 rounded-2xl shadow-lg p-6 md:p-8 lg:p-10 backdrop-blur-sm">
            <p className="text-lg mb-8 text-center">
              Заполните форму ниже, и мы свяжемся с вами для подтверждения записи и ответим на все вопросы
            </p>
            
            {formCooldown ? (
              <div className="text-center p-8 bg-fitkids-soft-yellow/30 dark:bg-fitkids-dark-blue/70 rounded-lg">
                <p className="text-xl font-medium mb-4">Форма временно недоступна</p>
                <p className="mb-2">Вы недавно отправили заявку. Повторная отправка возможна через:</p>
                <p className="text-2xl font-bold">{formatTime(cooldownTime)}</p>
              </div>
            ) : (
              <Form {...form}>
                <form onSubmit={form.handleSubmit(handleOpenEula)} className="space-y-6">
                  {/* Child's Name */}
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-900 dark:text-gray-100">Имя ребёнка *</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Введите имя ребёнка" 
                            className="bg-white dark:bg-gray-800" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  {/* Phone Number */}
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-900 dark:text-gray-100">Номер телефона *</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="+7 (___) ___-__-__" 
                            className="bg-white dark:bg-gray-800" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  {/* Age Selection */}
                  <FormField
                    control={form.control}
                    name="age"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-900 dark:text-gray-100">Возраст ребёнка *</FormLabel>
                        <FormControl>
                          <select
                            className="w-full rounded-md border border-input bg-white dark:bg-gray-800 px-3 py-2 text-base md:text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                            {...field}
                          >
                            <option value="" disabled>Выберите возраст</option>
                            <option value="2">2 года</option>
                            <option value="3">3 года</option>
                            <option value="4">4 года</option>
                            <option value="5">5 лет</option>
                            <option value="6">6 лет</option>
                          </select>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  {/* Activity Selection */}
                  <FormField
                    control={form.control}
                    name="activity"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-900 dark:text-gray-100">Направление *</FormLabel>
                        <FormControl>
                          <select
                            className="w-full rounded-md border border-input bg-white dark:bg-gray-800 px-3 py-2 text-base md:text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                            disabled={!age}
                            {...field}
                          >
                            <option value="" disabled>Выберите направление</option>
                            {availableActivities.map((act) => (
                              <option key={act} value={act}>
                                {act}
                              </option>
                            ))}
                          </select>
                        </FormControl>
                        {!age && (
                          <p className="text-sm text-gray-500 mt-2">Сначала выберите возраст ребёнка</p>
                        )}
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  {/* Comments */}
                  <FormField
                    control={form.control}
                    name="comment"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-900 dark:text-gray-100">Комментарий</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Дополнительная информация или вопросы..." 
                            className="bg-white dark:bg-gray-800 min-h-[120px]" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  {/* Submit Button */}
                  <div className="pt-4">
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full md:w-auto bg-fitkids-yellow hover:bg-fitkids-yellow/90 text-black font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-lg"
                    >
                      {isSubmitting ? 'Отправка...' : 'Отправить заявку'}
                    </Button>
                  </div>
                </form>
              </Form>
            )}
          </div>
        </section>
      </div>

      {/* EULA Dialog */}
      <EulaDialog 
        open={isEulaOpen} 
        onClose={() => setIsEulaOpen(false)} 
        onAccept={handleEulaAccepted} 
      />
    </Layout>
  );
};

export default Register;
