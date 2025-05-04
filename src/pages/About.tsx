
import Layout from '@/components/Layout';

const About = () => {
  return (
    <Layout>
      <div className="w-full max-w-7xl mx-auto px-4 md:px-10 pt-10 md:pt-16 pb-16">
        <section className="mb-16 animate-on-scroll">
          <h1 className="text-3xl md:text-5xl font-bold mb-10 text-center">О нас</h1>
          
          <div className="bg-white/80 dark:bg-fitkids-dark-blue/50 rounded-2xl shadow-lg p-6 md:p-8 lg:p-10 backdrop-blur-sm">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-fitkids-yellow">Детский центр FITKIDS</h2>
            
            <div className="space-y-6 text-lg">
              <p>
                <strong>FITKIDS</strong> — это детский центр в городе Тихвин, созданный для физического и творческого развития детей от 2 до 6 лет. 
                Наша миссия — привить детям любовь к активному образу жизни с самого раннего возраста.
              </p>
              
              <p>
                Мы предлагаем разнообразные программы, которые помогают детям развивать координацию, гибкость, силу и выносливость 
                в игровой и увлекательной форме. Наши занятия способствуют не только физическому, но и социальному развитию ребенка.
              </p>
              
              <p>
                Все программы разработаны профессиональными тренерами с учетом возрастных особенностей детей. 
                Мы стремимся создать комфортную и безопасную среду, где каждый ребенок может раскрыть свой потенциал.
              </p>
            </div>
          </div>
        </section>
        
        <section className="mb-16 animate-on-scroll">
          <h2 className="text-2xl md:text-4xl font-bold mb-8 text-center">Наши программы</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-fitkids-soft-yellow/70 dark:bg-fitkids-dark-blue/50 p-6 rounded-2xl shadow-md backdrop-blur-sm">
              <h3 className="text-xl md:text-2xl font-bold mb-4">Фитнес (2–4 года)</h3>
              <p className="mb-4">
                Программа «Фитнес» для малышей от 2 до 4 лет разработана с учетом особенностей развития детей раннего возраста. 
                Занятия проходят в игровой форме и включают в себя:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Базовые гимнастические упражнения</li>
                <li>Игры на развитие координации движений</li>
                <li>Упражнения на развитие баланса</li>
                <li>Музыкально-ритмические игры</li>
              </ul>
            </div>
            
            <div className="bg-fitkids-soft-pink/70 dark:bg-fitkids-dark-blue/50 p-6 rounded-2xl shadow-md backdrop-blur-sm">
              <h3 className="text-xl md:text-2xl font-bold mb-4">Ритмика (3–4 года)</h3>
              <p className="mb-4">
                Программа «Ритмика» для детей 3-4 лет направлена на развитие чувства ритма, музыкального слуха и координации движений. 
                На занятиях дети:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Учатся двигаться под музыку</li>
                <li>Осваивают простые танцевальные движения</li>
                <li>Развивают слух и чувство ритма</li>
                <li>Учатся контролировать свое тело</li>
              </ul>
            </div>
            
            <div className="bg-fitkids-soft-blue/70 dark:bg-fitkids-dark-blue/50 p-6 rounded-2xl shadow-md backdrop-blur-sm">
              <h3 className="text-xl md:text-2xl font-bold mb-4">Хореография (4–6 лет)</h3>
              <p className="mb-4">
                Программа «Хореография» для детей 4-6 лет знакомит с основами танцевального искусства и включает:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Основы классического танца</li>
                <li>Элементы современной хореографии</li>
                <li>Работу над осанкой и пластикой</li>
                <li>Групповые танцевальные номера</li>
              </ul>
            </div>
            
            <div className="bg-fitkids-soft-green/70 dark:bg-fitkids-dark-blue/50 p-6 rounded-2xl shadow-md backdrop-blur-sm">
              <h3 className="text-xl md:text-2xl font-bold mb-4">Гимнастика (4–6 лет)</h3>
              <p className="mb-4">
                Программа «Гимнастика» для детей 4-6 лет направлена на физическое развитие и включает:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Упражнения на развитие гибкости</li>
                <li>Силовые упражнения, адаптированные для детей</li>
                <li>Элементы спортивной гимнастики</li>
                <li>Упражнения на координацию и баланс</li>
              </ul>
            </div>
          </div>
        </section>
        
        {/* Statistics Section */}
        <section className="animate-on-scroll py-12">
          <div className="flex flex-col md:flex-row justify-center items-center gap-16 md:gap-32">
            <div className="text-center">
              <div className="text-5xl md:text-7xl font-bold text-fitkids-yellow mb-2">300+</div>
              <div className="text-xl md:text-2xl font-medium">выпускников, поступивших в муниципальные коллективы</div>
            </div>
            
            <div className="text-center">
              <div className="text-5xl md:text-7xl font-bold text-fitkids-yellow mb-2">10</div>
              <div className="text-xl md:text-2xl font-medium">лет работы</div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default About;
