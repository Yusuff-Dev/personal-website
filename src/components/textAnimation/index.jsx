'use client'
function index({ children }) {
    return (
        <div className="relative overflow-hidden group">
            <p className={`group-hover:-translate-y-full duration-300`}>{children}</p>
            <p className="absolute top-full w-[100%] group-hover:-translate-y-full duration-300 opacity-40">{children}</p>
        </div>
    )
}

export default index