
import React from "react";
import axios from 'axios'
import { NavLink, Link, useParams, Route } from "react-router-dom";
import Popup from 'reactjs-popup'

export default function Populer(props) {
  const [populer, setPopuler] = React.useState([]);
  const [number, setnumber] = React.useState(0);
  const [img,setImg] = React.useState([])
  const [jumlah,setJumlah] = React.useState([])
  const [total,setTotal] = React.useState([])
  const [nama,setNama] = React.useState([])
  props.getSemua(img,jumlah,total,nama)

  const getPopuler = async () => {
    try {
      const url = `https://belajar-react.smkmadinatulquran.sch.id/api/populer/all`;
      const response = await axios.get(url)
      setPopuler(response.data.data)
    } catch (error) {
      console.log(error)
    }
  };

  React.useEffect(() => {
    getPopuler()
  }, []);

  return (
    <React.Fragment>
      <div className="mt-0 pr-5">
        <div className="items-center justify-between">
          <h1 className="font-bold text-2xl">Populer</h1>
        </div>
        <div className="mt-3">
          <ul className="flex-wrap flex items-center w-full">
            {populer.map((p, index) => (
              <li key={index} className={`w-1/4 h-32 relative m-5 mb-10`}>
               <Popup trigger={
                    <img
                    className="rounded-xl w-full h-32"
                    src={p.image}
                    alt={p.image}
                    style={{ cursor: "pointer" }}
                  />
                } modal >
                {close => (
                  <div className="modal rounded-xl bg-white shadow-lg p-5 w-96 font-poppins">
                    <img className='w-full h-32 rounded-xl' src={p.image} alt={p.name} />
                    <div className="flex justify-between font-bold mt-5">
                      <h1 className="text-lg">{p.name}</h1>
                      <h1 className="text-lg">Rp. {p.harga}</h1>
                    </div>
                    <div className="mt-5 flex">
                     <p className="mr-5"><i className="far fa-star mr-2"></i>{p.rating}</p>
                     <p><i className="far fa-clock mr-2"></i>{p.waktu}</p>
                    </div>
                    <div className="mt-5">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat quam rerum eum dolor accusantium nisi, recusandae odit at culpa sit quas velit voluptate! Autem, laudantium labore ullam architecto nostrum tempore?
                    </div>
                    <div className="mt-5">
                      <p>Stok : {p.jumlah}</p>
                    </div>
                      <div className="mt-5 flex bg-yellow-100 w-1/4 h-8 items-center rounded-xl">
                        <div className="p-1">
                          <button onClick={()=>{
                            p.jumlah--
                            setnumber(p.pesan++)
                          }}>+</button>
                        </div>
                        <div className="mx-5">
                          {
                            p.pesan
                          }
                        </div>
                        <div className="p-1">
                          <button disabled={p.pesan===0} onClick={()=>{
                             p.jumlah++
                             setnumber(p.pesan--)
                          }}>-</button>
                        </div>
                      </div>
                      <div className="rounded-xl bg-yellow-300 h-8 mt-5 items-center w-full text-center">
                        <button className="text-bold text-md font-bold p-1"
                        onClick={()=>{
                          setImg(p.image)
                          setJumlah(p.harga)
                          setTotal(p.pesan)
                          setNama(p.name)
                      }}
                        >Pesan Sekarang</button>
                      </div>
                  </div>
                )}
                </Popup>
                <div className="absolute rounded-xl z-10 pl-3  flex items-center justify-start top-24 bottom-0 left-0 right-0 text-white font-black ">
                  <p style={{ background: "white" }} className="text-black text-center font-semibold rounded-xl text-xs p-1">{p.waktu}  </p>
                </div>
                <a
                  style={{ cursor: "pointer" }}
                >
                  <p className="text-black font-black">
                    {p.name}
                  </p>
                  <p className="text-black font-black text-sm">
                    <span><i className="far fa-star mr-5">{p.rating}</i>Rp.{p.harga}</span>
                  </p>
                </a>

                {/* modal popup */}
                
              </li>
            ))}
          </ul>
      </div>
      </div>
    </React.Fragment >

  )
}