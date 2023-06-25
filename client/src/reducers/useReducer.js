import { useReducer } from 'react';

const ACTIONS = {
    ADD: 'added',
    CHANGE: 'changed',
    DELETE: 'deleted'
}

export function userReducer(user, action) {
    switch (action.type) {
      case ACTIONS.ADD: {
        return [...user, {
          id: action.id,
          text: action.text,
          done: false
        }];
      }
      case ACTIONS.CHANGE: {
        return user.map(t => {
          if (t.id === action.task.id) {
            return action.task;
          } else {
            return t;
          }
        });
      }
      case ACTIONS.DELETE: {
        return user.filter(t => t.id !== action.id);
      }
      default: {
        throw Error('Unknown action: ' + action.type);
      }
    }
  }

export default function userReducer() {
  const [user, dispatch] = useReducer(userReducer, {});
  return [user, dispatch];
}
