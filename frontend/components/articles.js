import React from "react"
import Card from "./card"

const Articles = ({ articles }) => {
  const leftArticlesCount = Math.ceil(articles.length / 5)
  const leftArticles = articles.slice(0, leftArticlesCount)
  const rightArticles = articles.slice(leftArticlesCount, articles.length)

  return (
    <div className="uk-animation-toggle">
      <div className="  uk-card uk-card-default uk-card-body uk-animation-slide-left  uk-child-width-1-2@s" data-uk-grid="true">
        <div>
          {leftArticles.map((article, i) => {
            return (
              <Card article={article} key={`article__left__${article.slug}`} />
            )
          })}
        </div>
        <div className=" uk-card uk-card-default uk-card-body uk-animation-slide-right ">
          <div className=" uk-card uk-card-default uk-card-body uk-animation-slide-right uk-child-width-1-2@m uk-grid-match" data-uk-grid>
            {rightArticles.map((article, i) => {
              return (
                <Card
                  article={article}
                  key={`article__left__${article.slug}`}
                />
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Articles
