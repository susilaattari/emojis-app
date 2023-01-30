import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./Components/Navbar";
import Container from "./Components/Container";
import Empty from "./Components/Empty";
import Emojis from "./Components/Emojis";
import Input from "./Components/Input";
import Loading from "./Components/Loading";

function App() {
  const [emojisData, setEmojisData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [search, setSearch] = useState("");

  // useEfect adalah suatu efek yang dimana setiap load/even terjadi maka data yang ada di dalam useefek akan di eksekusi
  useEffect(() => {
    async function fetchEmozis() {
      setLoading(true);
      try {
        const res = await axios.get(
          "https://run.mocky.io/v3/fe964130-70d0-430f-b839-e55081423c28"
        );
        setEmojisData(res.data);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    }
    fetchEmozis();
  }, []); //gunanya parameter ke 2([]) di useefect untuk menghindari setiap even yang terjadi agar tidak melakukan aksi di useefect

  const handleSearch = (e) => setSearch(e.target.value);
  console.log(search);
  return (
    <>
      <Navbar />
      {loading ? (
        <Loading />
      ) : (
        <Container>
          <Input onChange={handleSearch} value={search} />

          {error && <Empty text="Kesalahan jaringan atau server error" />}

          {emojisData.length > 0 && (
            <Emojis dataEmojis={emojisData} searchText={search} />
          )}
        </Container>
      )}
    </>
  );
}

export default App;
