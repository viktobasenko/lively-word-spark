
import Layout from '@/components/Layout';

const PrivacyPolicy = () => {
  return (
    <Layout>
      <div className="w-full max-w-4xl mx-auto px-4 md:px-10 pt-10 md:pt-16 pb-16">
        <section className="mb-16 animate-on-scroll">
          <h1 className="text-3xl md:text-5xl font-bold mb-10 text-center">Политика конфиденциальности</h1>
          
          <div className="bg-white/80 dark:bg-fitkids-dark-blue/50 rounded-2xl shadow-lg p-6 md:p-8 lg:p-10 backdrop-blur-sm">
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-bold mb-3">1. Общие положения</h2>
                <p>Настоящая политика конфиденциальности установлена для защиты информации о посетителях сайта FITKIDS. Используя сайт, вы соглашаетесь с условиями данной политики.</p>
              </div>
              
              <div>
                <h2 className="text-xl font-bold mb-3">2. Цель обработки персональных данных</h2>
                <p>Персональные данные пользователей обрабатываются в следующих целях:</p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>Обработка заявок и сообщений, отправленных через формы обратной связи;</li>
                  <li>Предоставление услуг, указанных на сайте;</li>
                  <li>Связь с пользователем для уточнения деталей заявки.</li>
                </ul>
              </div>
              
              <div>
                <h2 className="text-xl font-bold mb-3">3. Персональные данные, которые мы собираем:</h2>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>Имя</li>
                  <li>Номер телефона</li>
                  <li>Электронная почта</li>
                  <li>Другая информация, добровольно предоставленная пользователем</li>
                </ul>
              </div>
              
              <div>
                <h2 className="text-xl font-bold mb-3">4. Принципы обработки персональных данных</h2>
                <p>Обработка персональных данных осуществляется в строгом соответствии с законодательством РФ.</p>
                <p>Мы не передаём ваши данные третьим лицам без согласия, за исключением предусмотренных законом случаев.</p>
                <p>Мы принимаем меры по защите данных от несанкционированного доступа.</p>
              </div>
              
              <div>
                <h2 className="text-xl font-bold mb-3">5. Права пользователей:</h2>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>Требовать удаления данных</li>
                  <li>Получать информацию об обработке</li>
                </ul>
                <p className="mt-3">
                  <strong>Контакты:</strong><br />
                  Email: pgob818@gmail.com<br />
                  Телефон: +7 (921) 397-92-97
                </p>
              </div>
              
              <div>
                <h2 className="text-xl font-bold mb-3">6. Изменения</h2>
                <p>Администрация оставляет за собой право изменять данную политику. Все изменения вступают в силу с момента публикации.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default PrivacyPolicy;
