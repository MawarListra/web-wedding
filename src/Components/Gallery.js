import React from 'react'
import Gambar1 from '../Images/Rectangle 20.png'
import Gambar2 from '../Images/Rectangle 21.png'
import Gambar3 from '../Images/Rectangle 22.png'
import Gambar4 from '../Images/Rectangle 25.png'
import Gambar5 from '../Images/Rectangle 23.png'
import Gambar6 from '../Images/Rectangle 24.png'

function Gallery() {
    return (
        <div className='md:flex md:w-full md:h-full justify-center items-center'>
            <div className='flex flex-col w-auto h-auto justify-center items-center py-24 px-24'>
                <text className='font-script text-4xl font-bold'>Galeri Cinta Kami</text>
                <div className='flex flex-row w-auto h-auto py-8'>
                    <div className='flex flex-col w-auto h-auto space-y-2'>
                        <div>
                            <img src={Gambar1}></img>
                        </div>
                        <div>
                            <img src={Gambar4}></img>
                        </div>
                    </div>
                    <div className='flex flex-col w-auto h-auto space-y-2 ml-2 mr-2'>
                        <div>
                            <img src={Gambar2}></img>
                        </div>
                        <div>
                            <img src={Gambar5}></img>
                        </div>
                    </div>
                    <div className='flex flex-col w-auto h-auto space-y-2'>
                        <div>
                            <img src={Gambar3}></img>
                        </div>
                        <div>
                            <img src={Gambar6}></img>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Gallery
