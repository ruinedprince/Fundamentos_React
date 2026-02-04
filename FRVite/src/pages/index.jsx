import TextInput from '../components/TextInput'
import { useState } from 'react';

export default function Index() {
    const [text, setText] = useState('');
    const maxLength = 125;
    const [tweetList, setTweetList] = useState([]);

    function sendTweet() {
        setTweetList([text, ...tweetList]); // Adiciona o texto ao início do array de tweets.
        setText(''); // Limpa o campo de texto.
    }

    function onTextChange(event) {
        const text = event.target.value;
        if (text.length <= maxLength) {
            setText(text);
        }
    }

    return (
        <div>
            <h1>TreinaTweet</h1>
            <div>
                <img src="https://github.com/ruinedprince.png" alt="Foto de perfil do usuário" />
                <TextInput 
                    placeholder={"O que está acontecendo?"}
                    onChange={onTextChange}
                    value={text}
                    maxLength={maxLength}
                />
            </div>
            <div>
                <div>{text.length}/{maxLength}</div>
                <button onClick={sendTweet}>Enviar</button>
            </div>
            <ul>
                {tweetList.map((tweet) => {
                    return <li key={tweet}>{tweet}</li>
                })}
            </ul>
        </div>
    )
}