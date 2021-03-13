import {
  contents,
  actors,
  content_actors,
  directors,
  content_directors,
  content_genres,
  genres,
} from "../models/";

export const getOneContent = async (req, res) => {
  try {
    let results = await contents.findOne({
      where: { id: req.params.id },
      attributes: {
        exclude: ["rating_details"],
      },
      include: [
        {
          model: actors,
          attributes: ["name"],
          exclude: [
            {
              model: content_actors,
            },
          ],
          through: {
            attributes: [],
          },
        },
        {
          model: directors,
          attributes: ["name"],
          exclude: [
            {
              model: content_directors,
            },
          ],
          through: {
            attributes: [],
          },
        },
        {
          model: genres,
          attributes: ["name"],
          exclude: [
            {
              model: content_genres,
            },
          ],
          through: {
            attributes: [],
          },
        },
      ],
    });
    res.json(results);
  } catch (error) {
    res.status(400).json({
      messsage: "Hubo un error al procesar tu petición",
    });
  }
};

export const addcontents = async (req, res) => {
  try {
    const results = await contents.create({
      title: req.body.title,
      description: req.body.description,
      total_seasons: req.body.total_seasons,
      imdb_score: req.body.imdb_score,
      release_dates: req.body.release_dates,
      play_time: req.body.play_time,
      content_rating: req.body.content_rating,
      total_episodes: req.body.total_episodes,
      content_type: req.body.content_type,
      imdb_link: req.body.imdb_link,
      imdb_score_votes: req.body.imdb_score_votes,
      rating_details: req.body.rating_details,
      languages: req.body.languages,
    });
    return res.status(201).json(results);
  } catch (error) {
    res.status(500).json({ message: "Ocurrio un problema intente mas tarde" });
  }
};

export const updatecontents = async (req, res) => {
  const findcontents = await contents.findOne({ where: { id: req.params.id } });
  if (findcontents) {
    try {
      contents.update(
        {
          title: req.body.title,
          description: req.body.description,
          total_seasons: req.body.total_seasons,
          imdb_score: req.body.imdb_score,
          release_dates: req.body.release_dates,
          lay_time: req.body.lay_time,
          content_rating: req.body.content_rating,
          total_episodes: req.body.total_episodes,
          content_type: req.body.content_type,
          imdb_link: req.body.imdb_link,
          imdb_score_votes: req.bodyimdb_score_votes,
          rating_details: req.body.rating_details,
          languages: req.body.languages,
        },
        { where: { id: req.params.id } }
      );
      res.status(200).json({ message: "actualizacion exitosa" });
    } catch (error) {
      res.satatus(500).json({ message: "ocurrio un error intente mas tarde" });
    }
  } else {
    res
      .status(400)
      .json({ message: "hubo un problema para actualizar rol de usuario" });
  }
};

export const getcontents = async (req, res) => {
  try {
    let results = await contents.findAll({
      limit: req.query.limit,
      attributes: {
        exclude: [
          "description",
          "total_seasons",
          "play_time",
          "content_rating",
          "total_episodes",
          "content_type",
          "imdb_link",
          "languages",
          "last_updated",
          "createdAt",
          "updatedAt",
          "rating_details",
        ],
      },
    });
    res.json(results);
  } catch (error) {
    res.status(400).json({
      messsage: "Hubo un error al procesar tu petición",
    });
  }
};

export const erasecontents = async (req, res) => {
  const findcontents = await contents.findOne({ where: { id: req.params.id } });
  if (findcontents) {
    try {
      contents.destroy({ where: { id: req.params.id } });
      res.status(200).json({ message: "Registro eliminado." });
    } catch (error) {
      res.status(400).json({
        messsage: "Hubo un error al procesar tu petición",
      });
    }
  }
};
