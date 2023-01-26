import React, { useEffect, useState } from 'react'
import CodeMirror from '@uiw/react-codemirror';
import { AiOutlineCloudDownload, AiOutlineCopy } from 'react-icons/ai';
import { BiReset } from 'react-icons/bi';
const Editor = () => {
    const [code, setCode] = useState('');

    return (<>
        
        <CodeMirror
            value={code}
            height="100vh"
            onChange={(e) => { setCode(e) }}
            theme="dark"
            options={{
            }}
        />
    </>
    )
}

export default Editor