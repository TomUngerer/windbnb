import React from 'react'

const SharePost = props => {
  return (
    <div style={{width: 100}}>
      <ul class="uk-nav uk-nav-default">
        <li class="uk-nav-header">Share</li>
        <li>
          <a
            href={`https://twitter.com/share?text=${decodeURI(
              props.title
            )}&url=${props.url}/`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span class="uk-margin-small-right" uk-icon="icon: twitter" />
            Twitter
          </a>
        </li>
        <li>
          <a
            href={`https://www.facebook.com/sharer/sharer.php?u=${
              props.url
            }&t=${decodeURI(props.title)}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span class="uk-margin-small-right" uk-icon="icon: facebook" />
            Facebook
          </a>
        </li>
        <li>
          <a
            href={`https://www.linkedin.com/shareArticle?url=${
              props.url
            }&title=${decodeURI(props.title)}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span class="uk-margin-small-right" uk-icon="icon: linkedin" />
            LinkedIn
          </a>
        </li>
      </ul>
    </div>
  );
}

export default SharePost