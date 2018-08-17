import schema from '../schemas/index'
import { fromJS } from 'immutable'

const initialState = fromJS({
  entities: schema.entities,
  categories: schema.result.categories,
  search: []
})

function data(state = initialState, action) {
  switch(action.type){
    case 'SEARCH_ENTITIES': {
      //const query = action.payload.query.toLowerCase()
      /*let results = []
      if(action.payload.query){
        const query = action.payload.query.toLowerCase()
        state.data.categories.map(item=>
          item.playlist.filter(item =>
            item.author.toLowerCase().includes(query) && results.push(item)
          )
        )
      }
      return { ...state, search: results }*/
      return state.set('search', action.payload.query)
    }
    default:
      return state
  }
}

export default data;