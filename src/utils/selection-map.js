export default function selectionMap({series, films})
{
    return {
        series:[
            {title: "Documentaries", data: series.filter((obj) => obj.genre === "documentaries")},
            {title: "comedies", data: series.filter((obj) => obj.genre === "comedies")},
            {title: "children", data: series.filter((obj) => obj.genre === "children")},
            {title: "crime", data: series.filter((obj) => obj.genre === "crime")},
            {title: "Feel Good", data: series.filter((obj) => obj.genre === "feel-good")}
        ],

        films:[
            {title: "Drama", data: films.filter((obj) => obj.genre === "drama")},
            {title: "Thriller", data: films.filter(obj => obj.genre === "thriller")},
            {title: "Children", data: films.filter(obj => obj.genre === "children")},
            {title: "Suspense", data: films.filter(obj => obj.genre === "suspense")},
            {title: "Romance", data: films.filter(obj => obj.genre === "romance")},
        ]
    }
}