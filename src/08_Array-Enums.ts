const WatchAnime: string[] = ["One Piece", "Black Clover"]
const AnimePrice: number[] = [100, 99]

const rating: Array<number> = [9.9, 9.0]

type Anime = {
    name: string,
    rating: number
}

const animeList: Anime[] = [
    {
        name: "One Piece",
        rating: 9.9
    },
    {
        name: "Black Clover",
        rating: 9.0
    }
]

const recommendAnime: readonly string[] = ["Breserk", "Death Note"]
// recommendAnime.push("High School DxD") // Error: Property 'push' does not exist on type 'readonly string[]'.


// multi-dimensional array
const table: number[][] = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

// tupes : tupes always return Array but some time cuses problem
let memberTupes: [string, number];
memberTupes = ["Luffy", 19];
memberTupes = ["Zoro", 21];
memberTupes = ["Sanji", 20];

// optional element in tupes

let userInfo: [string, number, boolean?];
userInfo = ["Luffy", 19, true];
userInfo = ["Zoro", 21];
userInfo = ["Sanji", 20, false];

// readonly tupes

const location: readonly [number, number] = [40.7128, -74.0060]; // this cannot be  changed

// name the tupes
const items: [name: string, price: number] = ["Laptop", 999.99]


// enum
