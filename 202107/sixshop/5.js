function solution(N, relation) {
    const graph = new Array(N).fill(0);

    graph.forEach((_, ei) => {
        graph[ei] = [];
    });

    relation.forEach((r) => {
        graph[r[0] - 1].push(r[1] - 1);
        graph[r[1] - 1].push(r[0] - 1);
    });

    const answer = [];

    const countFriends = (node) => {
        const hasOwnNode = (fr) => {
            return fr.includes(node); 
        }

        let friendsCount = 0;

        friendsCount += graph[node].length;

        const friendRelation = graph[node];

        if (graph[friendRelation[0]] && graph[friendRelation[0]].length === 2 && hasOwnNode(graph[friendRelation[0]])) {
            friendsCount += 1;
        }

        if (graph[friendRelation[1]] && graph[friendRelation[1]].length === 2 && hasOwnNode(graph[friendRelation[1]])) {
            friendsCount += 1;
        }

        return friendsCount
    };

    graph.forEach((friendRelation, node) => {
        const count = countFriends(node);
        
        answer.push(count);
    });

    return answer
}

const N = 5;
const relation = [[1,2],[4,2],[3,1],[4,5]]	;

console.log(solution(N, relation));