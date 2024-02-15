"use client"; 
import * as React from 'react'
import type { NextPage } from "next";
import Layout from "../../components/layout";
import EmojiCard from "../../components/emojiCard";
import List from "../../components/list";
import emojisData from "../../data/emojis";
import CategoryCard from '../../components/categoryCard';



const Home: NextPage = () => {
  const [filteredEmojis, setFilterEmojis] = React.useState(emojisData)

  function handleFilterBySearch(search: string) {
    if(search.trim().length >0){

    
    setFilterEmojis (
      emojisData.filter((emoji) =>{
        return emoji.name.toUpperCase().includes(search.toUpperCase().trim())
      })
    )
  } else {
      setFilterEmojis(emojisData)
    }
  }

  function handleFilterByCategory(category: string){
    setFilterEmojis(
      emojisData.filter((emoji)=>
        emoji.group.toUpperCase().includes(category.toUpperCase())
      )
    );
  }
  
  return (
    <Layout>
      <h1 className="text-2xl md:text-5xl font-bold text-gray-700 text-center tracking-wide my-3"> ¡Welcome to the Emojiverse!</h1>
      <div className='flex justify-center'>
        <input className="w-full max-w-xl border border-gray-300 p-3 rounded-md my-8 bg-white shadow-md focus:outline-none focus:border-cyan-600 focus:ring-1"
          id='name'
          type={'text'}
          placeholder="Search an emoji"
          onChange={(e) => handleFilterBySearch(e.target.value)}
        />
      </div>


      <div className='grid grid-cols-1 md:grid-cols-3 gap-3 mb-8'>
            <CategoryCard
              handleFilter={handleFilterByCategory}
              emoji="🙂"
              group={'Emotions'}
            />
            <CategoryCard
              handleFilter={handleFilterByCategory}
              emoji="👨🏻"
              group={'People & Body'}
            />
            <CategoryCard
              handleFilter={handleFilterByCategory}
              emoji="🐶"
              group={'Animals & Nature'}
            />
            <CategoryCard
              handleFilter={handleFilterByCategory}
              emoji="🍔"
              group={'Food & Drink'}
            />
            <CategoryCard
              handleFilter={handleFilterByCategory}
              emoji="⚽️"
              group="Activities"
            />
            <CategoryCard
              handleFilter={handleFilterByCategory}
              emoji="🏨"
              group={'Travel & Places'}
            />
            <CategoryCard
              handleFilter={handleFilterByCategory}
              emoji="💡"
              group="Objects"
            />
            <CategoryCard
              handleFilter={handleFilterByCategory}
              emoji="⚛️"
              group="Symbols"
            />
            <CategoryCard
              handleFilter={handleFilterByCategory}
              emoji="🚩"
              group="Flags"
            />

      </div>
      

      <List emojis={filteredEmojis} />
      </Layout>
  );

}

export default Home
