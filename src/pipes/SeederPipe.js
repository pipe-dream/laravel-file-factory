import { Template } from '@pipe-dream/core/dist/pipe-dream.js'
import ModelPipe from './ModelPipe'
import {ModelEntity} from '@pipe-dream/core/dist/pipe-dream.js'

export default class SeederPipe extends ModelPipe {

    static get title() {
        return 'SeederPipe';
    }

    calculateFiles(omc = ObjectModelCollection) {
        return [
            ... this.seederFiles(),
            ... this.databaseSeeder()
        ]
    }

    seederFiles() {
        return this.omc.models().map(model => {
            return {
                path: "database/seeds/" + model.className() + "Seeder.php",
                content: Template.for('Seeder.php').replace({
                    ___MODEL___: model.className(),
                    ___MODEL_NAMESPACE___: this.modelNamespace(),
                })
            }
        }).concat(
            this.manyToManySeederFiles()
        )
    }

    manyToManySeederFiles() {
        return [] // not sure how to do this
    }

    databaseSeeder() {
        return this.omc.hasModels() ? [{
            path: "database/seeds/DatabaseSeeder.php",
            content: Template.for('DatabaseSeeder.php').replace({
                ___DATABASE_SEEDERS_BLOCK___: this.databaseSeedersBlock()
            })
        }] : []
    }

    databaseSeedersBlock() {
        return this.omc.inOptimalMigrationOrder().filter(entity => (entity.isUserEntity() || entity.isModelEntity())).map(model => {
            return "$this->call(" + model.className() + "Seeder::class);"
        }).join(___SINGLE_LINE_BREAK___)
    }
}
