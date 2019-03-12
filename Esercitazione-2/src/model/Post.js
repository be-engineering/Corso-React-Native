export interface Post {
    id:Object;
    gender:string;
    name: Object;
    location: Object;
    coordinates: Object;
    timezone: Object;
    email: string;
    registered: Object;
    login:Object;
    phone:string;
    cell:string;
    picture: Object;
    nat: string;
};

export class PostList {
    results: Array<Post>;

     getResults = (): Array<Post> => {
        return this.results;
    }
    setResults = (results:Array<Post>) => {
      this.results = results;
    };
}