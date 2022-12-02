import Movies from "../Movies/Movies";

export default function Main () {
    return (
        <main>
            <div className='main__content container'>
                <h1 className='main__content-title'>¡Bienvenidos!</h1>
                <Movies/>
            </div>
        </main>
    )
}