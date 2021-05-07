import axios from "axios";

const source = [
  {
    id: "abc-news",
    name: "ABC News",
  },
  {
    id: "abc-news-au",
    name: "ABC News (AU)",
  },
  {
    id: "al-jazeera-english",
    name: "Al Jazeera English",
  },
  {
    id: "ars-technica",
    name: "Ars Technica",
  },
  {
    id: "associated-press",
    name: "Associated Press",
  },
  {
    id: "australian-financial-review",
    name: "Australian Financial Review",
  },
  {
    id: "axios",
    name: "Axios",
  },
  {
    id: "bbc-news",
    name: "BBC News",
  },
  {
    id: "bbc-sport",
    name: "BBC Sport",
  },
  {
    id: "bleacher-report",
    name: "Bleacher Report",
  },
  {
    id: "bloomberg",
    name: "Bloomberg",
  },
  {
    id: "breitbart-news",
    name: "Breitbart News",
  },
  {
    id: "business-insider",
    name: "Business Insider",
  },
  {
    id: "business-insider-uk",
    name: "Business Insider (UK)",
  },
  {
    id: "buzzfeed",
    name: "Buzzfeed",
  },
  {
    id: "cbc-news",
    name: "CBC News",
  },
  {
    id: "cbs-news",
    name: "CBS News",
  },
  {
    id: "cnn",
    name: "CNN",
  },
  {
    id: "crypto-coins-news",
    name: "Crypto Coins News",
  },
  {
    id: "engadget",
    name: "Engadget",
  },
  {
    id: "entertainment-weekly",
    name: "Entertainment Weekly",
  },
  {
    id: "espn",
    name: "ESPN",
  },
  {
    id: "espn-cric-info",
    name: "ESPN Cric Info",
  },
  {
    id: "financial-post",
    name: "Financial Post",
  },
  {
    id: "football-italia",
    name: "Football Italia",
  },
  {
    id: "fortune",
    name: "Fortune",
  },
  {
    id: "four-four-two",
    name: "FourFourTwo",
  },
  {
    id: "fox-news",
    name: "Fox News",
  },
  {
    id: "fox-sports",
    name: "Fox Sports",
  },
  {
    id: "google-news",
    name: "Google News",
  },
  {
    id: "google-news-au",
    name: "Google News (Australia)",
  },
  {
    id: "google-news-ca",
    name: "Google News (Canada)",
  },
  {
    id: "google-news-in",
    name: "Google News (India)",
  },
  {
    id: "google-news-uk",
    name: "Google News (UK)",
  },
  {
    id: "hacker-news",
    name: "Hacker News",
  },
  {
    id: "ign",
    name: "IGN",
  },
  {
    id: "independent",
    name: "Independent",
  },
  {
    id: "mashable",
    name: "Mashable",
  },
  {
    id: "medical-news-today",
    name: "Medical News Today",
  },
  {
    id: "msnbc",
    name: "MSNBC",
  },
  {
    id: "mtv-news",
    name: "MTV News",
  },
  {
    id: "mtv-news-uk",
    name: "MTV News (UK)",
  },
  {
    id: "national-geographic",
    name: "National Geographic",
  },
  {
    id: "national-review",
    name: "National Review",
  },
  {
    id: "nbc-news",
    name: "NBC News",
  },
  {
    id: "news24",
    name: "News24",
  },
  {
    id: "new-scientist",
    name: "New Scientist",
  },
  {
    id: "news-com-au",
    name: "News.com.au",
  },
  {
    id: "newsweek",
    name: "Newsweek",
  },
  {
    id: "new-york-magazine",
    name: "New York Magazine",
  },
  {
    id: "next-big-future",
    name: "Next Big Future",
  },
  {
    id: "nfl-news",
    name: "NFL News",
  },
  {
    id: "nhl-news",
    name: "NHL News",
  },
  {
    id: "politico",
    name: "Politico",
  },
  {
    id: "polygon",
    name: "Polygon",
  },
  {
    id: "recode",
    name: "Recode",
  },
  {
    id: "reddit-r-all",
    name: "Reddit /r/all",
  },

  {
    id: "reuters",
    name: "Reuters",
  },
  {
    id: "rte",
    name: "RTE",
  },
  {
    id: "talksport",
    name: "TalkSport",
  },
  {
    id: "techcrunch",
    name: "TechCrunch",
  },
  {
    id: "techradar",
    name: "TechRadar",
  },
  {
    id: "the-american-conservative",
    name: "The American Conservative",
  },
  {
    id: "the-globe-and-mail",
    name: "The Globe And Mail",
  },
  {
    id: "the-hill",
    name: "The Hill",
  },
  {
    id: "the-hindu",
    name: "The Hindu",
  },
  {
    id: "the-huffington-post",
    name: "The Huffington Post",
  },
  {
    id: "the-irish-times",
    name: "The Irish Times",
  },
  {
    id: "the-jerusalem-post",
    name: "The Jerusalem Post",
  },
  {
    id: "the-lad-bible",
    name: "The Lad Bible",
  },
  {
    id: "the-next-web",
    name: "The Next Web",
  },
  {
    id: "the-sport-bible",
    name: "The Sport Bible",
  },
  {
    id: "the-times-of-india",
    name: "The Times of India",
  },
  {
    id: "the-verge",
    name: "The Verge",
  },
  {
    id: "the-wall-street-journal",
    name: "The Wall Street Journal",
  },
  {
    id: "the-washington-post",
    name: "The Washington Post",
  },
  {
    id: "the-washington-times",
    name: "The Washington Times",
  },
  {
    id: "time",
    name: "Time",
  },
  {
    id: "usa-today",
    name: "USA Today",
  },
  {
    id: "vice-news",
    name: "Vice News",
  },
  {
    id: "wired",
    name: "Wired",
  },
];
const category = [
  "business",
  "entertainment",
  "general",
  "health",
  "science",
  "sports",
  "technology",
];
const api_key = process.env.REACT_APP_NEWS_API_KEY;

export default {
  getNewsSource: () => {
    // return axios.get<any>(
    //   `https://newsapi.org/v2/sources?language=en&apiKey=${api_key}`
    // );
    return source;
  },
  getNewsCategory: () => {
    return category;
  },
  getNewsArticle: () => {
    return axios.get<any>(
      `https://newsapi.org/v2/top-headlines?sources=google-news-in&pageSize=100&apiKey=${api_key}`
    );
  },
  getNewsArticleById: (id: string) => {
    return axios.get<any>(
      `https://newsapi.org/v2/top-headlines?sources=${id}&apiKey=${api_key}`
    );
  },
  getNewsByCategory: (category: string) => {
    return axios.get<any>(
      `https://newsapi.org/v2/top-headlines?category=${category}&country=us&language=en&apiKey=${api_key}`
    );
  },
  getTopHeadlinesIndia: () => {
    return axios.get<any>(
      `https://newsapi.org/v2/top-headlines?country=in&apiKey=${api_key}`
    );
  },
  getTopHeadlinesUsa: () => {
    return axios.get<any>(
      `https://newsapi.org/v2/top-headlines?country=us&apiKey=${api_key}`
    );
  },
};

//https://newsapi.org/v2/sources?language=en&apiKey=388ad90ff4a742b3883ed1e08abdb806
//https://newsapi.org/v2/top-headlines?sources=google-news-in&apiKey=388ad90ff4a742b3883ed1e08abdb806
//https://newsapi.org/v2/top-headlines?country=in&apiKey=388ad90ff4a742b3883ed1e08abdb806
