import { useEffect, useState } from "react"

export const useSearch = <T>(initData: T[]) => {
  const [data, setData] = useState<T[]>([])

  useEffect(() => {
    setData(initData) 
  }, [initData])

  const handleSearch = (search: string, keys: string[]) => {
    let onlyFilteredData = []
    setData([...data.filter((item: T) => {
      if (search === "") {
        return item 
      } 
      initData.forEach((item, index) => {
        onlyFilteredData.push()
      }) 
      return
    })])
    console.log(search);
  }

  return {
    data, 
    handleSearch
  }
}
