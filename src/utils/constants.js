
const API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;
export const YOUTUBE_VIDEOS_API = "https://www.googleapis.com/youtube/v3/videos?part=snippet&maxResults=50&regionCode=IN&chart=mostPopular&key="+API_KEY;
export const SEARCH_API = "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

