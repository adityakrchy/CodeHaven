import React, { useEffect, useState } from 'react'
import CodeMirror from '@uiw/react-codemirror';
const Editor = () => {
    const [code, setCode] = useState('');

    return (

        <CodeMirror
            value={code}
            height="100vh"
            onChange={(e)=>{setCode(e)}}
            theme="dark"
            options={{
            }}
            
        />
    )
}

export default Editor