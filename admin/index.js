import { useEffect } from 'react'

const useScript = url => {
    useEffect(() => {
        const script = document.createElement('script')

        script.src = url
        script.async = true

        document.body.appendChild(script)

        return () => {
            document.body.removeChild(script)
        }
    }, [url])
}

const Admin = () => {
    useScript('https://identity.netlify.com/v1/netlify-identity-widget.js')
    useScript('https://unpkg.com/netlify-cms@^2.0.0/dist/netlify-cms.js')
    return (
        <></>
    )
}

export default Notfound;
