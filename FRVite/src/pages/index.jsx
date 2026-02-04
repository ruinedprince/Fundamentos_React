import TextInput from '../components/TextInput'
import { useState } from 'react';

export default function Index() {
    const [text, setText] = useState('');
    const maxLength = 125;

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
                <button>Tweetar</button>
            </div>
            <ul>
                <li>Tweet 1</li>
                <li>Tweet 2</li>
                <li>Tweet 3</li>
            </ul>
        </div>
    )
}