export interface IActionListSettings {
    actionId: number;
    actionName: string;
    dicesQuantity: number;
    diceType: number;
    assignSkillId: number;
    heroId: number;
}

export interface IAction {
    actionId: number;
    actionName: string;
    assignSkillId: number;
}
