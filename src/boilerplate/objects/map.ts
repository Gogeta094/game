import { Checkpoint } from "./checkpoint";
import { Path } from "./path";
import { GameScene } from "../scenes/game";

export class Map {
    public Checkpoints: Checkpoint[] = [];
    public Paths: Path[] = []; 
    constructor(private scene: GameScene, private offsetX: number) {
    }

    public AddCheckpoint(x: number, y: number): Checkpoint{
        let checkpoint = new Checkpoint(this.scene, x + this.offsetX, y);
        this.Checkpoints.push(checkpoint);

        return checkpoint;
    }

    public AddPath(fromCheckpoint: Checkpoint, toCheckpoint: Checkpoint): Path {
        let path = new Path(this.scene, fromCheckpoint, toCheckpoint);
        this.Paths.push(path);

        return path;
    }

    public HasPath(fromCheckpoint: Checkpoint, toCheckpoint: Checkpoint) : boolean {
        return this.Paths.some(p => 
            p.From == fromCheckpoint && p.To == toCheckpoint
            || p.From == toCheckpoint && p.To == fromCheckpoint);
    }

    public static GenerateTestMap(scene: GameScene): Map {
        let map = new Map(scene, 150);

        var checkpoint = map.AddCheckpoint(50, 50);    
        var checkpoint2 = map.AddCheckpoint(150, 150); 
        var checkpoint3 = map.AddCheckpoint(250, 250); 
        var checkpoint4 = map.AddCheckpoint(350, 250); 
        var checkpoint5 = map.AddCheckpoint(350, 150); 
        var checkpoint6 = map.AddCheckpoint(350, 350); 
        var path = map.AddPath(checkpoint, checkpoint2); 
        var path2 = map.AddPath(checkpoint2, checkpoint3);
        var path3 = map.AddPath(checkpoint3, checkpoint6);
        var path4 = map.AddPath(checkpoint3, checkpoint5); 
        var path5 = map.AddPath(checkpoint3, checkpoint4);

        return map;
    }
}