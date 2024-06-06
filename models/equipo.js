class Equipo {
  constructor(
    id,
    categoryIds,
    title,
    copaNacional,
    champions,
    imageUrl,
    ligas,
  ) {
    this.id = id;
    this.categoryIds = categoryIds;
    this.title = title;
    this.imageUrl = imageUrl;
    this.champions = champions;
    this.ligas = ligas;
    this.copaNacional = copaNacional;
  }
}

export default Meal;
