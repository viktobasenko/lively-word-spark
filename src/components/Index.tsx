
import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, Info, MapPin, User } from 'lucide-react';
import Logo from '@/components/Logo';

const Index: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-center items-center mb-8">
        <Logo />
      </div>

      {/* Section title with colored background */}
      <div className="bg-orange-100 py-4 px-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold text-center">Наши Занятия</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {[1, 2, 3].map((id) => (
          <Card key={id} className="overflow-hidden bg-orange-100">
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Занятие {id}</h3>
              <p className="text-gray-700">
                Описание занятия и его преимуществ для развития детей.
              </p>
              <div className="flex items-center mt-4">
                <Clock className="w-5 h-5 mr-2 text-gray-500" />
                <span className="text-sm text-gray-500">60 минут</span>
              </div>
              <div className="flex items-center mt-2">
                <User className="w-5 h-5 mr-2 text-gray-500" />
                <span className="text-sm text-gray-500">Для детей 5-12 лет</span>
              </div>
              <Link to="/register" className="mt-4 inline-flex">
                <Button>Записаться</Button>
              </Link>
            </div>
          </Card>
        ))}
      </div>

      {/* Section title with colored background */}
      <div className="bg-blue-100 py-4 px-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold text-center">Наши направления</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
        {[1, 2, 3, 4].map((id) => (
          <Card key={id} className="overflow-hidden bg-blue-100">
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Направление {id}</h3>
              <p className="text-gray-700">
                Краткое описание направления и особенностей тренировок.
              </p>
              <Link to="/direction" className="mt-4 inline-flex">
                <Button variant="outline">Подробнее</Button>
              </Link>
            </div>
          </Card>
        ))}
      </div>

      {/* Section title with colored background */}
      <div className="bg-green-100 py-4 px-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold text-center">Почему выбирают нас</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {[
          {
            title: 'Профессиональные тренеры',
            icon: <User className="w-12 h-12 mb-4 text-primary" />,
          },
          {
            title: 'Удобное расположение',
            icon: <MapPin className="w-12 h-12 mb-4 text-primary" />,
          },
          {
            title: 'Индивидуальный подход',
            icon: <Info className="w-12 h-12 mb-4 text-primary" />,
          },
        ].map((item, index) => (
          <Card key={index} className="overflow-hidden bg-green-100">
            <div className="p-6 flex flex-col items-center text-center">
              {item.icon}
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-700">
                Описание преимущества и как оно помогает в развитии детей.
              </p>
            </div>
          </Card>
        ))}
      </div>

      <div className="bg-purple-100 p-6 rounded-lg mb-12">
        <h2 className="text-2xl font-bold mb-4 text-center">Ближайшие события</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[1, 2].map((id) => (
            <Card key={id} className="overflow-hidden">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <Calendar className="w-5 h-5 mr-2 text-primary" />
                  <span className="font-medium">12 июня 2023</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Событие {id}</h3>
                <p className="text-gray-700 mb-4">
                  Описание события и его значимости для участников.
                </p>
                <Button variant="outline">Подробнее</Button>
              </div>
            </Card>
          ))}
        </div>
      </div>

      <div className="text-center mb-12">
        <h2 className="text-2xl font-bold mb-6">Запишитесь на пробное занятие</h2>
        <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
          Первое занятие бесплатно. Мы подберем оптимальную программу для вашего ребенка.
        </p>
        <Link to="/register">
          <Button size="lg">Записаться</Button>
        </Link>
      </div>
    </div>
  );
};

export default Index;
