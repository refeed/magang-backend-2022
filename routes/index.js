var express = require('express');
var geoDB = require('../services/nonPersistentStorage');
var router = express.Router();

router.get('/geojson/', function(req, res, next) {
    // Buat dapetin list of geoJSON yang kesimpen
    res.status(200).json(geoDB.getGeoJSONs())
});

router.post('/geojson', function(req, res, next) {
    // FIXME: Perlu cek ada req.body.geoJSON apa ngga
    geoDB.addGeoJSON(req.body.geoJSON)
    res.status(200).json({message: "Successfully saved"})
});

// FIXME: Harusnya DELETE, tapi pakai GET karena gampang dipakai di browser
router.get('/geojson/delete/:id', function(req, res, next) {
    // FIXME: Misal ngga ada objek dengan index id -> 404
    geoDB.deleteGeoJSONs(req.params.id)
    res.status(200).json({message: "Successfully deleted"})
});

module.exports = router;
