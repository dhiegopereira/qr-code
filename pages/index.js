import QRCode from 'qrcode'

import { useEffect, useState } from "react"

export default function Home() {

  const [text, setText] = useState("");
  const [qrCode, setQrCode] = useState("");

  const generateQR = async () => {
    try {
      const result = await QRCode.toDataURL(text)
      setQrCode(result)
    } catch (err) {
      console.error(err)
    }
  }

  const downloadImage = () => {
    const link = document.createElement('a');
    link.href = qrCode;
    link.download = 'qrcode.png';
    link.click();
  }

  return (
    <div className='container'>
      <h2>Adicione o texto</h2>
     <textarea cols={50} rows={10} type='text' onChange={(e) => { 
        setText(e.target.value);
        setQrCode("");
      }}></textarea>
     <button onClick={generateQR}>Gerar QRCode</button>
     <img src={qrCode} width={200} /> 
     {qrCode && <button onClick={downloadImage}>Baixar Imagem</button>}

     <div>Criado por Diegon ❤️ Vivi</div>
    </div>

    
  )
}
