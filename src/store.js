import { configureStore } from "@reduxjs/toolkit";
import { redPart1 } from "./redPart1";
import { redPart2 } from "./redPart2";

export const store=configureStore({
    reducer:{
        firstReducer:redPart1,
        secondReducer:redPart2
    }
})