import React from 'react';
import './Question.css';


function Question(props) {
  return(
    <a href="#"
      onClick={() => { props.onChange(props.question) } }
      data-testid={props.testId}
      value={props.question}
      data-genre={props.genre}
      data-artists={props.artists}
      data-tracks={props.tracks} >
      <li>
        <figure>
          <img src={props.imageUrl}
               alt={props.question} />
          <figcaption>{props.question}</figcaption>
        </figure>
        {props.playerHTML &&
          <iframe width="100%" height="380" title="Spotify Embed: Signal" frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy" src={`https://open.spotify.com/embed/artist/${props.playerHTML}?utm_source=oembed`}></iframe>
        }
      </li>
    </a>
  );
}

export default Question;
