
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import ImageSlider from '@/components/ImageSlider';

const Index = () => {
  // Activity directions data
  const activityCards = [
    {
      id: 1,
      title: 'Фитнес',
      ageRange: '2–4 года',
      bgColor: 'bg-fitkids-soft-yellow/80',
      description: 'Веселые и активные занятия для самых маленьких'
    },
    {
      id: 2,
      title: 'Ритмика',
      ageRange: '3–4 года',
      bgColor: 'bg-fitkids-soft-pink/80',
      description: 'Развитие чувства ритма и координации'
    },
    {
      id: 3,
      title: 'Хореография',
      ageRange: '4–6 лет',
      bgColor: 'bg-fitkids-soft-blue/80',
      description: 'Основы танцевального искусства'
    },
    {
      id: 4,
      title: 'Гимнастика',
      ageRange: '4–6 лет',
      bgColor: 'bg-fitkids-soft-green/80',
      description: 'Развитие гибкости и силы'
    }
  ];

  // Slider images
  const sliderImages = [
    "/lovable-uploads/scr1.png",
    "/lovable-uploads/scr2.png",
    "/lovable-uploads/scr3.png",
    "/lovable-uploads/scr4.png"
  ];

  return (
    <Layout>
      <section className="min-h-screen flex flex-col justify-center items-center p-4 md:p-10">
        <div className="w-full max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="flex flex-col items-center justify-center py-12 md:py-20 animate-on-scroll">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-center drop-shadow-lg text-gray-900">
              FITKIDS
            </h1>
            
            <p className="text-lg md:text-xl text-center max-w-2xl mb-12 bg-white/80 p-4 rounded-xl backdrop-blur-sm text-gray-800">
              Детский центр в&nbsp;г.&nbsp;Тихвин - фитнес, ритмика, хореография и&nbsp;гимнастика для детей от&nbsp;2&nbsp;до&nbsp;6&nbsp;лет
            </p>
            
            <Link to="/register" className="bg-fitkids-yellow hover:bg-fitkids-yellow/90 text-black font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-lg">
              Записаться на занятия
            </Link>
          </div>

          {/* Slider Section */}
          <div className="py-8 md:py-16">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 animate-on-scroll bg-white/80 py-2 rounded-xl inline-block px-8 mx-auto drop-shadow-lg backdrop-blur-sm text-gray-900">
              Наши занятия
            </h2>
            
            <div className="animate-on-scroll">
              <ImageSlider images={sliderImages} autoplayInterval={5000} />
            </div>
          </div>
          
          {/* Activities Section */}
          <div className="py-8 md:py-16">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 animate-on-scroll bg-white/80 py-2 rounded-xl inline-block px-8 mx-auto drop-shadow-lg backdrop-blur-sm text-gray-900">
              Наши направления
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {activityCards.map((card, index) => (
                <Link to="/register" key={card.id} className="animate-on-scroll" style={{animationDelay: `${index * 150}ms`}}>
                  <div className={`activity-card ${card.bgColor} h-full backdrop-blur-md`}>
                    <h3 className="text-2xl font-bold mb-2 text-gray-900">{card.title}</h3>
                    <p className="text-fitkids-yellow font-bold mb-4 drop-shadow-md">{card.ageRange}</p>
                    <p className="text-gray-800">{card.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
          
          {/* Benefits Section */}
          <div className="py-16 md:py-24 animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 bg-white/80 py-2 rounded-xl inline-block px-8 mx-auto drop-shadow-lg backdrop-blur-sm text-gray-900">
              Почему выбирают нас
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-6 rounded-2xl bg-fitkids-soft-blue/80 backdrop-blur-md animate-on-scroll">
                <h3 className="text-xl font-bold mb-4 text-gray-900">Опытные тренеры</h3>
                <p className="text-gray-800">Наши инструкторы имеют профессиональное образование и опыт работы с детьми разного возраста</p>
              </div>
              
              <div className="p-6 rounded-2xl bg-fitkids-soft-pink/80 backdrop-blur-md animate-on-scroll">
                <h3 className="text-xl font-bold mb-4 text-gray-900">Современное оборудование</h3>
                <p className="text-gray-800">Занятия проходят в специально оборудованных залах с безопасным инвентарем</p>
              </div>
              
              <div className="p-6 rounded-2xl bg-fitkids-soft-green/80 backdrop-blur-md animate-on-scroll">
                <h3 className="text-xl font-bold mb-4 text-gray-900">Индивидуальный подход</h3>
                <p className="text-gray-800">Мы учитываем особенности и возможности каждого ребенка</p>
              </div>
              
              <div className="p-6 rounded-2xl bg-fitkids-soft-yellow/80 backdrop-blur-md animate-on-scroll">
                <h3 className="text-xl font-bold mb-4 text-gray-900">Комфортная атмосфера</h3>
                <p className="text-gray-800">В нашем центре царит дружелюбная атмосфера, способствующая развитию и раскрытию талантов</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
