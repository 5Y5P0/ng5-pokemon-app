"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mock_pokemons_1 = require("./pokemons/mock-pokemons");
var InMemoryDataService = (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var pokemons = mock_pokemons_1.POKEMONS;
        return { pokemons: pokemons };
    };
    return InMemoryDataService;
}());
exports.InMemoryDataService = InMemoryDataService;
//# sourceMappingURL=in-memory-data.service.js.map