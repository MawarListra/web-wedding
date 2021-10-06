import React from 'react'

function PopUp() {
    return (
        <div className='flex flex-col w-2/4 h-96 border justify-center items-center rounded-3xl bg-white space-y-4 inset-0'>
            <h1 className='font-sans pt-10 text-3xl'>Masukkan kode anda</h1>
            <div className='flex flex-row space-x-8 justify-center items-center'>
                <input className='w-28 h-28 border border-black justify-center text-center items-center text-2xl' type='text'></input>
                <input className='w-28 h-28 border border-black' type='text justify-center text-center items-center text-2xl'></input>
                <input className='w-28 h-28 border border-black' type='text justify-center text-center items-center text-2xl'></input>
                <input className='w-28 h-28 border border-black' type='text justify-center text-center items-center text-2xl'></input>
            </div>
            <div className='py-4'>
                <button className='w-40 h-12 text-white bg-chocolate rounded-3xl font-sans items-center justify-center'>Kirim</button>
            </div>
        </div>
    )
}

export default PopUp
