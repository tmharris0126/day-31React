import React from 'react'
import NavbarView from './navbar_view.js'
import Post from './post.js';
import Bloginput from './bloginput_view.js'

export default React.createClass({

    render: function() {
        return(
          <article>
            <Post title={"The God of Mischief"} body={"Loki (Old Norse Loki, is the wily trickster god of Norse mythology."} />
            <Post title={"Loki"} body={"Neither an Aesir or a Vanir, he is the son of two giants and yet the foster-brother of Odin. Loki embodies the ambiguous and darkening relationship between the gods and the giants."} />
            <Post title={"The Unfunctional God"} body={"The Norse God of Mischief or the God of Fire? Neither, really. Loki is not referred to by either of these titles in the source texts of Norse mythology. Rudolf Simek calls him “a god without a function,” and all the major scholars of Norse mythology and religion agree that Loki was never actually worshiped in ancient times."} />
            <Post title={"The Famlily"} body={"His wife was the giant Angerboda and his kids were Hel, the goddess of death; Jormungand, the serpent that surrounds the world; Fenrir, the wolf and Sleipnir, Odin’s eight-legged horse."} />
            <Post title={"The Punishment"} body={"Loki was then sought out and bound to a rock by the entrails of his son Narfi, who had been torn to pieces by his son, Vali, who had been transformed into a ravenous wolf. The faithful Sigyn kept watch over her husband, catching the poison from the serpent that Skadi placed over Loki's head. It was said that, when Sigyn left to empty the bowl, the poison would drip into Loki's eyes. His writhing from the pain caused earthquakes. He was chained until the day of Ragnarök, the end of the gods"} />
          </article>
        );
    }
});
