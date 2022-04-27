import './App.css';
import List from './components/List';
import ListItem from './components/ListItem';
import Widget from './components/Widget';

export default function App() {
  const propsDate = new Date().toLocaleString();
  const moreDotButton = { url: '#0', title: '...' };
  const newsTabs = [
    { url: '#0', title: 'Сейчас в СМИ', active: true },
    { url: '#0', title: 'в Германии', active: false },
    { url: '#0', title: 'Рекомендуем', active: false },
  ];
  const newsItems = [
    {
      url: '#0',
      title: 'Новость 1',
      iconUrl: 'https://via.placeholder.com/15',
    },
    {
      url: '#0',
      title: 'Новость 2',
      iconUrl: 'https://via.placeholder.com/15',
    },
    {
      url: '#0',
      title: 'Новость 3',
      iconUrl: 'https://via.placeholder.com/15',
    },
    {
      url: '#0',
      title: 'Новость 4',
      iconUrl: 'https://via.placeholder.com/15',
    },
    {
      url: '#0',
      title: 'Новость 5',
      iconUrl: 'https://via.placeholder.com/15',
    },
  ];
  const stocks = [
    { url: '#0', currency: 'USD MOEX', rate: '63.52', delta: '+0.09' },
    { url: '#0', currency: 'EUR MOEX', rate: '70.86', delta: '+0.14' },
    { url: '#0', currency: 'НЕФТЬ', rate: '64.90', delta: '+1.36%' },
  ];
  const headerWidget = {
    url: '#0',
    title: 'Работа над ошибками',
    text: 'Смотрите на Яндексе и запоминайте',
    iconUrl: 'https://via.placeholder.com/75?text=WIDGET',
  };
  const mainMenuItems = [
    { url: '#0', title: 'Видео' },
    { url: '#0', title: 'Картинки' },
    { url: '#0', title: 'Новости' },
    { url: '#0', title: 'Карты' },
    { url: '#0', title: 'Маркет' },
    { url: '#0', title: 'Переводчик' },
    { url: '#0', title: 'Эфир' },
    { url: '#0', title: 'еще' },
  ];
  const searchWidget = {
    url: '#0',
    bottomText: 'Найдется все. Например, фаза луны сегодня',
    imageUrl: 'https://via.placeholder.com/150x50?text=Яндекс',
    buttonTitle: 'Найти',
  };
  const bannerWidget = {
    url: '#0',
    imageUrl: 'https://via.placeholder.com/1200x100?text=РЕКЛАМА',
  };
  const weatherWidget = {
    url: '#0',
    iconUrl: 'https://via.placeholder.com/50?text=WIDGET',
    title: 'Погода',
    iconText: '+17',
    topText: 'Утром +17,',
    bottomText: 'днем +20',
  };
  const mapWidget = {
    url: '#0',
    title: 'Карта Германии',
    text: 'Расписания',
  };
  const mostVisited = {
    url: '#0',
    title: 'Посещаемое',
    links: [
      {
        url: '#0',
        section: 'Недвижимость',
        article: 'о сталинках',
      },
      {
        url: '#0',
        section: 'Маркет',
        article: 'люстры и светильники',
      },
      {
        url: '#0',
        section: 'Авто.ру',
        article: 'привод 4х4 до 500 000',
      },
    ],
  };
  const tvProgramm = {
    url: '#0',
    title: 'Телепрограмма',
    links: [
      {
        url: '#0',
        time: '02:00',
        show: 'ТНТ. Best',
        channel: 'ТНТ International',
      },
      {
        url: '#0',
        time: '02:15',
        show: 'Джинглики',
        channel: 'Карусель INТ',
      },
      {
        url: '#0',
        time: '02:25',
        show: 'Наедине со всеми',
        channel: 'Первый',
      },
    ],
  };
  const tvNow = {
    url: '#0',
    title: 'Эфир',
    links: [
      {
        url: '#0',
        iconUrl: 'https://via.placeholder.com/15',
        show: 'Управление как искусство',
        channel: 'Успех',
      },
      {
        url: '#0',
        iconUrl: 'https://via.placeholder.com/15',
        show: 'Ночь. Мир в это время',
        channel: 'earthTV',
      },
      {
        url: '#0',
        iconUrl: 'https://via.placeholder.com/15',
        show: 'Андрей Возн...',
        channel: 'Совершенно секретно',
      },
    ],
  };

  return (
      <div className="App">
        <section className="App-header">
          <div className="Header_news-col">
            <article className="News-col_news-tabs">
              <List
                  className="News-col_news-tabs-list"
                  items={newsTabs}
                  date={propsDate}
              >
                {(items) =>
                    items.map((item, index) => (
                        <ListItem
                            key={index}
                            className="News-col_news-tabs-list-item"
                        >
                          <a href={item.url}>{item.title}</a>
                        </ListItem>
                    ))
                }
              </List>
            </article>

            <article className="News-col_news">
              <List className="News-col_news-list" items={newsItems}>
                {(items) =>
                    items.map((item, index) => (
                        <ListItem key={index} className="News-col_news-list-item">
                          <a href={item.url}>
                            <img src={item.iconUrl} alt="" />
                            {item.title}
                          </a>
                        </ListItem>
                    ))
                }
              </List>
            </article>

            <article className="News-col_stocks">
              <List
                  className="News-col_stocks-list"
                  items={stocks}
                  more={{ ...moreDotButton }}
              >
                {(items) =>
                    items.map((item, index) => (
                        <ListItem key={index} className="News-col_stocks-list-item">
                          <a href={item.url}>{item.currency}</a>
                          <span>{item.rate}</span>
                          <span> </span>
                          <span>{item.delta}</span>
                        </ListItem>
                    ))
                }
              </List>
            </article>
          </div>

          <div className="Header_widget-col">
            <Widget className="Header_widget">
              <img src={headerWidget.iconUrl} alt="" />
              <a href={headerWidget.url}>{headerWidget.title}</a>
              {headerWidget.text}
            </Widget>
          </div>
        </section>

        <main className="App-main">
          <nav className="Main_menu">
            <List className="Main_menu-list" items={mainMenuItems}>
              {(items) =>
                  items.map((item, index) => (
                      <ListItem key={index} className="Main_menu-list-item">
                        <a href={item.url}>{item.title}</a>
                      </ListItem>
                  ))
              }
            </List>
          </nav>

          <Widget className="Main_search-widget">
            <div className="Search-widget_logo">
              <img src={searchWidget.imageUrl} alt="" />
            </div>
            <div className="Search-widget_form-container">
              <form className="Search-widget_form">
                <input className="Search-widget_input" />
                <button className="Search-widget_button">
                  {searchWidget.buttonTitle}
                </button>
              </form>
              <span className="Search-widget_text">
              {searchWidget.bottomText}
            </span>
            </div>
          </Widget>
        </main>

        <section className="Banner-section">
          <Widget className="Banner-widget">
            <a href={bannerWidget.url}>
              <img src={bannerWidget.imageUrl} alt="" />
            </a>
          </Widget>
        </section>

        <section className="App-footer">
          <div className="Footer_widgets-container">
            <Widget className="Footer_widget Weather-widget">
              <a href={weatherWidget.url}>
                <h1>{weatherWidget.title}</h1>
                <div className="Weather-widget_content">
                  <img src={weatherWidget.iconUrl} alt="" />
                  <span>{weatherWidget.iconText}&#176;</span>
                  <div>
                    <p>{weatherWidget.topText}</p>
                    <p>{weatherWidget.bottomText}</p>
                  </div>
                </div>
              </a>
            </Widget>
            <Widget className="Footer_widget Map-widget">
              <a href={mapWidget.url}>
                <h1>{mapWidget.title}</h1>
                <span>{mapWidget.text}</span>
              </a>
            </Widget>
            <Widget className="Footer_widget Most-visited-widget">
              <a href={mostVisited.url}>
                <h1>{mostVisited.title}</h1>
              </a>
              <List
                  className="Most-visited-widget_links"
                  items={mostVisited.links}
              >
                {(items) =>
                    items.map((item, index) => (
                        <ListItem
                            key={index}
                            className="Most-visited-widget_links-item"
                        >
                          <a href={item.url}>
                            <span>{item.section}</span>
                            <span>{' - '}</span>
                            <span>{item.article}</span>
                          </a>
                        </ListItem>
                    ))
                }
              </List>
            </Widget>
            <Widget className="Footer_widget TV-programm-widget">
              <a href={tvProgramm.url}>
                <h1>{tvProgramm.title}</h1>
              </a>
              <List className="TV-programm-widget_links" items={tvProgramm.links}>
                {(items) =>
                    items.map((item, index) => (
                        <ListItem
                            key={index}
                            className="TV-programm-widget_links-item"
                        >
                          <a href={item.url}>
                            <span>{item.time}</span>
                            <span>{item.show}</span>
                            <span>{item.channel}</span>
                          </a>
                        </ListItem>
                    ))
                }
              </List>
            </Widget>
            <Widget className="Footer_widget TV-now-widget">
              <a href={tvNow.url}>
                <h1>{tvNow.title}</h1>
              </a>
              <List className="TV-now-widget_links" items={tvNow.links}>
                {(items) =>
                    items.map((item, index) => (
                        <ListItem key={index} className="TV-now-widget_links-item">
                          <a href={item.url}>
                            <img src={item.iconUrl} alt="" />
                            <span>{item.show}</span>
                            <span>{item.channel}</span>
                          </a>
                        </ListItem>
                    ))
                }
              </List>
            </Widget>
          </div>
        </section>
      </div>
  );
}