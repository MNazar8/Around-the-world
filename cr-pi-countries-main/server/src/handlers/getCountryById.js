const { getCountries } = require("./countryHandler");
const { Country, Activity } = require("../db");
const {Op} = require ("sequelize");


const getCountryById = async (req, res) => {
    try {
        const { id } = req.params;
        const countryId = await Country.findByPk(id.toUpperCase());
        if (countryId) {
            return res.status(200).send(countryId)
        }
    } catch (error) {
        return res.status(400).send(error.message)
    }
}


// const getCountryByName = async (req, res) => {
//     try {
//         const { name } = req.query;
        // const countries = await Country.findAll({
        //     where:
        //     {
        //         name:
        //             { [Op.iLike]: `%${name}%` }
        //     }
        // })
        // console.log(name, "AQUI");
//         const countries = await Country.findAll();
//         if (name){
//             const findedCountries = countries.filter((c) => c.name.lowerCase().includes(name.lowerCase()))
//         return res.status(200).send(findedCountries)
//         }
//     } catch (error) {
//         return res.status(400).send(error.message)
//     }
// }

module.exports = {
    getCountryById,
    // getCountryByName
}