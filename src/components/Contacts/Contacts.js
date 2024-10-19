import React from "react";
import { Link } from "@mui/material";
import icon_fb from "../../assets/icon-facebook.png";
import icon_snapchat from "../../assets/icon-snapchat.png";
import icon_x from "../../assets/icon-twitter.png";
import styles from "./Contacts.module.css";

const Contacts = () => {
return(
    <section>
<div>
    <h1 className={styles.h1}>Контакты</h1>
   <ul>
    <li>Телефон: +123456789</li>
    <li>Email: example@mail.com</li>
   </ul>
    <form>
        <input type="email" placeholder="e-mail"/>
        <input type="text" placeholder="Имя"/>
        <input type="text" placeholder="Введите сообщение"/>
       <button type="submit">Отправить</button>
    </form>
</div>

<div>
<h3>Найдите нас:</h3>
<Link href="https://www.facebook.com">
  <img src={icon_fb} alt="icon_fb" />
</Link>
<Link href="https://www.snapchat.com">
  <img src={icon_snapchat} alt="icon_snapchat" />
</Link>
<Link href="https://www.twitter.com">
  <img src={icon_x} alt="icon_x" />
</Link>
</div>

    </section>
)
}

export default Contacts;
