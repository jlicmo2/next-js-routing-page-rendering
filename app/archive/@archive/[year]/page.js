import NewsList from "@/app/components/news-list";
import { getNewsForYear } from "@/app/lib/news";


export default function FilteredNews({params}){
    const newsYear = params.year
    const news = getNewsForYear(newsYear)
    return <NewsList news={news} />
}