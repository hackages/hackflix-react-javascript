let year = new Date().getFullYear();

export function Footer(){
    return (
        <footer className="py-6 bg-gray-900 text-center">
            <p className="text-white">Hackflix © {year} Powered by Hackages</p>
        </footer>
    )
}