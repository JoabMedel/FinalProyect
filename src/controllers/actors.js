import { actors, contents } from "../models/";

export const addActor = async (req, res) => {
  try {
    const results = await actors.create({
      name: req.body.name,
    });
    return res.status(201).json(results);
  } catch (error) {
    res.status(500).json({ message: "Ocurrio un problema intente mas tarde" });
  }
};

export const updateActor = async (req, res) => {
  const findActor = await actors.findOne({ where: { id: req.params.id } });
  if (findActor) {
    try {
      actors.update(
        {
          name: req.body.name,
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

export const getActors = async (req, res) => {
  try {
    let results = await actors.findAll();
    res.json(results);
  } catch (error) {
    res.status(400).json({
      messsage: "Hubo un error al procesar tu petición",
    });
  }
};

export const getActor = async (req, res) => {
  try {
    let results = await actors.findOne({ where: { id: req.params.id } });
    res.json(results);
  } catch (error) {
    res.status(400).json({
      messsage: "Hubo un error al procesar tu petición",
    });
  }
};

export const eraseActor = async (req, res) => {
  const findActor = await actors.findOne({ where: { id: req.params.id } });
  if (findActor) {
    try {
      actors.destroy({ where: { id: req.params.id } });
      res.status(200).json({ message: "actualizacion exitosa" });
    } catch (error) {
      res.status(400).json({
        messsage: "Hubo un error al procesar tu petición",
      });
    }
  }
};

export const getActorsContent = async (req, res) => {
  try {
    let results = await actors.findOne({
      where: { id: req.params.id },
      include: [
        {
          model: contents,
          attributes: ["title"],
          through: {
            attributes: [],
          },
        },
      ],
    });
    res.json(results);
  } catch (error) {
    res.status(500).json({
      message: "Hubo un error al tratar de procesar tu petición",
      error,
    });
  }
};
