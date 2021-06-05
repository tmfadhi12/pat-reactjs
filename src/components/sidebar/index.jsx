import React from "react";

export default function Sidebar(props) {
    let data = [
        {   Image: props.img,
            Jumlah: props.jumlah,
            Total: props.total,
            Nama: props.nama,
        }
    ]
    return(
        <React.Fragment>
        <section className="bg-gray-200 h-full fixed w-1/4">
            <div className="p-5 w-full">
                <h1 className="font-bold text-2xl">Pesanan Saya</h1>
                    <div className="bg-purple-600 p-3 rounded-xl">
                        <p className="text-white mb-3">Thoriq Muhammad Fadhli</p>
                        <p className="text-white mb-3">Rp. 5.000.000,00</p>
                        <p className="text-white mb-3">3 7 5 8 * * * * * * *  * 8 9 1 3</p>
                    </div>
                    <div className="">
                <ul className="flex w-full justify-between flex-wrap">
                        {data.map((dt,i)=>(
                            dt.Jumlah*dt.Total === 0 ? "" :<li key={i} className="flex items-center justify-between w-full h-24 relative">  
                            <img className="rounded-xl w-2/12 h-8 " src={dt.Image} alt={dt.Image} />
                        <div className="flex">
                           {dt.Total}
                        </div>
                        <div>x</div>
                        <div className="font-bold">{props.nama}</div>
                        <div>
                            {dt.Jumlah * dt.Total}
                        </div>
                      </li>
                        ))}                       
                    </ul>
                </div>

                <div className="mb-4 mt-3 flex justify-between">
                    <p className="text-sm font-bold text-black">
                       total :
                    </p>
                    <p className="text-xl font-bold text-black">
                       Rp.  {props.jumlah * props.total}
                    </p>
                </div>
                <div className="bg-yellow-400 p-3 rounded-xl text-center">
                    <p className="text-black font-bold">Pesan</p>
                </div>
            </div>
        </section>
        </React.Fragment>
    )
}