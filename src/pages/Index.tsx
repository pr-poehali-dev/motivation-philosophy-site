import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('quotes');
  const [selectedTheme, setSelectedTheme] = useState('all');
  const [selectedEra, setSelectedEra] = useState('all');

  const themes = ['Все', 'Мудрость', 'Счастье', 'Смелость', 'Самопознание'];
  const eras = ['Все', 'Античность', 'Средневековье', 'Новое время', 'Современность'];

  const quotes = [
    { id: 1, text: 'Познай самого себя', author: 'Сократ', theme: 'Самопознание', era: 'Античность' },
    { id: 2, text: 'Единственная истинная мудрость в том, чтобы знать, что ты ничего не знаешь', author: 'Сократ', theme: 'Мудрость', era: 'Античность' },
    { id: 3, text: 'Счастье зависит от нас самих', author: 'Аристотель', theme: 'Счастье', era: 'Античность' },
    { id: 4, text: 'Смелость — это сопротивление страху, а не отсутствие страха', author: 'Марк Твен', theme: 'Смелость', era: 'Новое время' },
    { id: 5, text: 'Жизнь без испытаний не стоит того, чтобы быть прожитой', author: 'Сократ', theme: 'Мудрость', era: 'Античность' },
    { id: 6, text: 'Человек есть то, что он из себя делает', author: 'Жан-Поль Сартр', theme: 'Самопознание', era: 'Современность' },
  ];

  const philosophers = [
    { id: 1, name: 'Сократ', era: 'Античность', description: 'Основоположник западной философии, учитель Платона' },
    { id: 2, name: 'Платон', era: 'Античность', description: 'Ученик Сократа, основатель Академии в Афинах' },
    { id: 3, name: 'Аристотель', era: 'Античность', description: 'Ученик Платона, учитель Александра Македонского' },
    { id: 4, name: 'Фома Аквинский', era: 'Средневековье', description: 'Систематизатор схоластики, создатель томизма' },
    { id: 5, name: 'Рене Декарт', era: 'Новое время', description: 'Отец современной философии, создатель рационализма' },
    { id: 6, name: 'Иммануил Кант', era: 'Новое время', description: 'Немецкий философ, создатель критической философии' },
    { id: 7, name: 'Жан-Поль Сартр', era: 'Современность', description: 'Французский философ-экзистенциалист и писатель' },
  ];

  const stories = [
    { id: 1, title: 'Притча о пещере', philosopher: 'Платон', theme: 'Мудрость', text: 'Платон описывает людей, которые с детства прикованы цепями в пещере и видят лишь тени на стене. Они принимают эти тени за реальность. Когда один из них освобождается и выходит на свет, он видит настоящий мир, но его рассказ о нём не находит понимания у тех, кто остался в пещере.' },
    { id: 2, title: 'Бочка Диогена', philosopher: 'Диоген Синопский', theme: 'Счастье', text: 'Диоген жил в бочке и отказался от всех материальных благ. Когда Александр Македонский предложил ему любую награду, Диоген попросил лишь отойти и не загораживать солнце. Эта история учит, что истинное счастье не зависит от внешних обстоятельств.' },
    { id: 3, title: 'Демон Сократа', philosopher: 'Сократ', theme: 'Самопознание', text: 'Сократ говорил о внутреннем голосе — демоне, который останавливал его от неправильных поступков. Это символ внутренней мудрости и совести, к которой важно прислушиваться.' },
  ];

  const filteredQuotes = quotes.filter(q => {
    const themeMatch = selectedTheme === 'all' || q.theme === selectedTheme;
    const eraMatch = selectedEra === 'all' || q.era === selectedEra;
    return themeMatch && eraMatch;
  });

  const filteredPhilosophers = philosophers.filter(p => {
    return selectedEra === 'all' || p.era === selectedEra;
  });

  const filteredStories = stories.filter(s => {
    return selectedTheme === 'all' || s.theme === selectedTheme;
  });

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary mb-2">
                Философия Жизни
              </h1>
              <p className="text-muted-foreground text-lg">Мудрость веков для современного человека</p>
            </div>
            <Button 
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
              onClick={() => window.open('https://t.me/motivaps', '_blank')}
            >
              <Icon name="Send" size={20} className="mr-2" />
              Telegram канал
            </Button>
          </div>
        </div>
      </header>

      <nav className="border-b border-border bg-card sticky top-0 z-10">
        <div className="container mx-auto px-4">
          <div className="flex justify-center gap-2 py-4">
            <Button
              variant={activeSection === 'quotes' ? 'default' : 'ghost'}
              onClick={() => setActiveSection('quotes')}
              className="font-semibold"
            >
              <Icon name="Quote" size={18} className="mr-2" />
              Цитаты
            </Button>
            <Button
              variant={activeSection === 'philosophers' ? 'default' : 'ghost'}
              onClick={() => setActiveSection('philosophers')}
              className="font-semibold"
            >
              <Icon name="User" size={18} className="mr-2" />
              Философы
            </Button>
            <Button
              variant={activeSection === 'stories' ? 'default' : 'ghost'}
              onClick={() => setActiveSection('stories')}
              className="font-semibold"
            >
              <Icon name="BookOpen" size={18} className="mr-2" />
              Истории
            </Button>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-8">
        <div className="mb-8 animate-fade-in">
          <h2 className="font-heading text-2xl font-semibold mb-4 text-primary">Фильтры</h2>
          <div className="flex flex-col md:flex-row gap-4">
            {activeSection !== 'philosophers' && (
              <div>
                <p className="text-sm font-semibold mb-2 text-muted-foreground">Тема</p>
                <div className="flex flex-wrap gap-2">
                  {themes.map((theme) => (
                    <Badge
                      key={theme}
                      variant={selectedTheme === (theme === 'Все' ? 'all' : theme) ? 'default' : 'outline'}
                      className="cursor-pointer transition-all hover:scale-105"
                      onClick={() => setSelectedTheme(theme === 'Все' ? 'all' : theme)}
                    >
                      {theme}
                    </Badge>
                  ))}
                </div>
              </div>
            )}
            <div>
              <p className="text-sm font-semibold mb-2 text-muted-foreground">Эпоха</p>
              <div className="flex flex-wrap gap-2">
                {eras.map((era) => (
                  <Badge
                    key={era}
                    variant={selectedEra === (era === 'Все' ? 'all' : era) ? 'default' : 'outline'}
                    className="cursor-pointer transition-all hover:scale-105"
                    onClick={() => setSelectedEra(era === 'Все' ? 'all' : era)}
                  >
                    {era}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        {activeSection === 'quotes' && (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredQuotes.map((quote, index) => (
              <Card 
                key={quote.id} 
                className="hover:shadow-lg transition-all hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <Icon name="Quote" size={32} className="text-accent mb-4" />
                  <p className="text-lg italic mb-4 text-foreground leading-relaxed">
                    "{quote.text}"
                  </p>
                  <Separator className="my-4" />
                  <p className="font-heading text-xl font-semibold text-primary">{quote.author}</p>
                  <div className="flex gap-2 mt-3">
                    <Badge variant="secondary">{quote.theme}</Badge>
                    <Badge variant="outline">{quote.era}</Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {activeSection === 'philosophers' && (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredPhilosophers.map((phil, index) => (
              <Card 
                key={phil.id} 
                className="hover:shadow-lg transition-all hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <Icon name="User" size={40} className="text-accent mb-4" />
                  <h3 className="font-heading text-2xl font-bold text-primary mb-3">{phil.name}</h3>
                  <Badge variant="secondary" className="mb-4">{phil.era}</Badge>
                  <Separator className="my-4" />
                  <p className="text-muted-foreground leading-relaxed">{phil.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {activeSection === 'stories' && (
          <div className="space-y-6">
            {filteredStories.map((story, index) => (
              <Card 
                key={story.id} 
                className="hover:shadow-lg transition-all animate-fade-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <CardContent className="p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <Icon name="BookOpen" size={32} className="text-accent mt-1" />
                    <div className="flex-1">
                      <h3 className="font-heading text-3xl font-bold text-primary mb-2">{story.title}</h3>
                      <div className="flex gap-2 mb-4">
                        <Badge variant="secondary">{story.philosopher}</Badge>
                        <Badge variant="outline">{story.theme}</Badge>
                      </div>
                    </div>
                  </div>
                  <Separator className="my-4" />
                  <p className="text-lg text-foreground leading-relaxed">{story.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </main>

      <footer className="border-t border-border bg-card mt-16">
        <div className="container mx-auto px-4 py-8 text-center">
          <p className="text-muted-foreground">
            © 2024 Философия Жизни. Мудрость для вдохновения.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;