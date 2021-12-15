import Article from "./Article";
import blogData from "../data/blog";

function ArticleList (props) {

    return (
<main>
    {props.posts.map((post) => {
        return(
            
                <Article key = {Math.random()} title= {post.title} date = {post.date} preview = {post.preview} />
        
          )
        })}
</main>        
    )
}

// Stuck on ArticleList and Article, more specifically im having difficulty with the passing of blogPost and its 'posts' to ArticleList then Article, I am aware that I have to iterate over the Articles with .map within Article list but am also unsure of how to turn the articles within Article into an array

export default ArticleList;