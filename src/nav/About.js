import React from "react";
import style from './About.module.css';

export default function About() {
  return (
    <div className={style.home}>
      <h1 className={style.title}> About Us</h1>

      <p className={style.body}>Food shaped the way Filipinos live. Aside from the food itself,
        there are priceless memories shared with whoever they’re with, which make it more special.
        Food glues foreigners, friends, and the whole family together (regardless of lifestyle differences).
        This can be observed in events like birthdays, graduation, anniversaries, or just a simple get-together.
        This value is pretty common among Asians but Filipinos take it to a new level.
        When you happen to buy ice-cold beer from a convenience store.
        People won’t hesitate to approach you and invite you to a table of pulutan (little amounts of food) and buckets of beer.</p>

        <p className={style.body}> Filipinos just naturally bring you homey vibes.
          They even invite people, even strangers during fiestas, to dine with them in their humble abode.
          This tradition may also showcase a social status.
          You’ll see golden utensils and cutlery beside your plate with dishes whose recipes are preserved in their ancestry.
          After the party, hosts would even give food for you to bring home.
          A simple gesture like this tells that there are some things money can’t buy.</p>

    </div>
  );
}
