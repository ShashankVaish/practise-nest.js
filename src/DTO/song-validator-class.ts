import { IsArray, IsDate, IsNotEmpty, IsNumber, IsString } from "class-validator";

class SongValidatorClass{
    @IsNotEmpty()
    @IsString()
    readonly tittle:string;
    @IsNotEmpty()
    // @IsArray()
    // @IsString({each:true})
    // readonly album:string;
    @IsNotEmpty()
    @IsArray()
    @IsString({each:true})
    readonly artist:string[];
    @IsNumber()
    @IsNotEmpty()
    readonly duration:number;
    @IsDate()
    @IsNotEmpty()
    readonly releaseDate:Date;

}
export {SongValidatorClass};