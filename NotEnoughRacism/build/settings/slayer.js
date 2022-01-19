/// <reference types="../CTObfuscatedAutocomplete/index" />
/// <reference lib="esnext" />

import {
    @ButtonProperty,
Color,
    @ColorProperty,
@PercentSliderProperty,
@SelectorProperty,
@TextProperty,
@SwitchProperty,
@SliderProperty,
@Vigilant,
@CheckboxProperty,
@ParagraphProperty
} from '../../../Vigilance';

@Vigilant("NotEnoughRacismConfig/Slayers", "Slayers", {
    getCategoryComparator: () => (a, b) => {
        const categories = ['Not general!', 'General'];

        return categories.indexOf(b.name) - categories.indexOf(a.name);
    }
})

class Slayer {


    @SwitchProperty({
        name: "Summons Ghost Arm",
        description: "Allows you to hit through summons\n&8- Only works with Summons which are Zombies in Leather Armor",
        category: "QOL",
        subcategory: "Ghost Arm"
    }) ghostArm = false;

    @TextProperty({
        name: "Player ESP IGN",
        category: "QOL",
        subcategory: "Player ESP"
    }) playerESPName = ""

    @ColorProperty({
        name: "Player ESP Color",
        description: "Sets the Highlight Color for Players",
        category: "QOL",
        subcategory: "Player ESP"
    }) playerColor = Color.RED

    // @SwitchProperty({
    //     name: "Hide Crypt Ghoul Name Tag",
    //     category: "QOL",
    //     subcategory: "Hide Name Tags"
    // })
    // hideGhoulTag = false;

    // @SwitchProperty({
    //     name: "Hide Spider Name Tag",
    //     category: "QOL",
    //     subcategory: "Hide Name Tags"
    // })
    // hideSpiderTag = false;

    // @SwitchProperty({
    //     name: "Hide Wolf Name Tag",
    //     category: "QOL",
    //     subcategory: "Hide Name Tags"
    // })
    // hideWolfTag = false;

    // @SwitchProperty({
    //     name: "Hide Voidling Fanatic Name Tag",
    //     category: "QOL",
    //     subcategory: "Hide Name Tags"
    // })
    // hideEmanTag = false;

    @SwitchProperty({
        name: "Tarantula Miniboss ESP",
        description: "Enables Tarantula Miniboss ESP",
        category: "Tarantula Broodfathers",
        subcategory: "Miniboss"
    }) taraMinis = false;

    @SwitchProperty({
        name: "Tarantula Boss ESP",
        description: "Enables Tarantula Boss ESP",
        category: "Tarantula Broodfathers",
        subcategory: "Boss"
    }) taraBoss = false;

    @ColorProperty({
        name: "Tarantula Vermin/Beast Color",
        description: "Sets Tarantula Vermin/Beast ESP Color",
        category: "Tarantula Broodfathers",
        subcategory: "Miniboss"
    }) taraBeast = Color.GREEN

    @ColorProperty({
        name: "Mutant Tarantula Color",
        description: "Sets Mutant Tarantula ESP Color",
        category: "Tarantula Broodfathers",
        subcategory: "Miniboss"
    }) mutantTara = Color.RED

    @ColorProperty({
        name: "Tarantula Boss Color",
        description: "Sets Tarantula Boss ESP Color",
        category: "Tarantula Broodfathers",
        subcategory: "Boss"
    }) taraBossColor = Color.BLUE

    //---------------------------------------------------------------------------------------------------

    @SwitchProperty({
        name: "Sven Miniboss ESP",
        description: "Enables Sven Miniboss ESP",
        category: "Sven Packmasters",
        subcategory: "Miniboss"
    }) svenMinis = false;

    @SwitchProperty({
        name: "Sven Boss ESP",
        description: "Enables Sven Boss ESP",
        category: "Sven Packmasters",
        subcategory: "Boss"
    }) svenBoss = false;

    @ColorProperty({
        name: "Sven Pack Enforcer/Follower Color",
        description: "Sets Sven Pack Enforcer/Follower Color ESP Color",
        category: "Sven Packmasters",
        subcategory: "Miniboss"
    }) svenFollower = Color.GREEN

    @ColorProperty({
        name: "Sven Alpha Color",
        description: "Sets Sven Alpha ESP Color",
        category: "Sven Packmasters",
        subcategory: "Miniboss"
    }) svenAlpha = Color.RED

    @ColorProperty({
        name: "Sven Boss Color",
        description: "Sets Sven Boss ESP Color",
        category: "Sven Packmasters",
        subcategory: "Boss"
    }) svenBossColor = Color.BLUE

    //---------------------------------------------------------------------------------------------------

    @SwitchProperty({
        name: "Revenant Miniboss ESP",
        description: "Enables Revenant Miniboss ESP",
        category: "Revenant Horros",
        subcategory: "Miniboss"
    }) revMinis = false;

    @SwitchProperty({
        name: "Revenant Boss ESP",
        description: "Enables Revenant Boss ESP",
        category: "Revenant Horros",
        subcategory: "Boss"
    }) revBoss = false;

    @ColorProperty({
        name: "Revenant Color",
        description: "Sets Revenant Miniboss Color ESP Color",
        category: "Revenant Horros",
        subcategory: "Miniboss"
    }) revMiniColor = Color.GREEN

    @ColorProperty({
        name: "Atoned Revenant Miniboss Color",
        description: "Sets Atoned Revenant Miniboss ESP Color",
        category: "Revenant Horros",
        subcategory: "Miniboss"
    }) atonedMini = Color.RED

    @ColorProperty({
        name: "Revenant Boss Color",
        description: "Sets Revenant Boss ESP Color",
        category: "Revenant Horros",
        subcategory: "Boss"
    }) revBossColor = Color.BLUE

    //---------------------------------------------------------------------------------------------------

    @SwitchProperty({
        name: "Voidgloom Miniboss ESP",
        description: "Enabled Voidgloom Miniboss ESP",
        category: "Voidgloom Seraph",
        subcategory: "Miniboss"
    }) voidgloomMinis = false;

    @ColorProperty({
        name: "Voidling Devotee/Radical ESP Color",
        description: "Sets Voidling Devotee/Radical ESP Color",
        category: "Voidgloom Seraph",
        subcategory: "Miniboss"
    }) voidlingRadi = Color.GREEN

    @ColorProperty({
        name: "Voidcrazed Maniac ESP Color",
        description: "Sets Voidcrazed Maniac ESP Color",
        category: "Voidgloom Seraph",
        subcategory: "Miniboss"
    }) voidcrazedManiac = Color.RED

    @SwitchProperty({
        name: "Enable",
        description: "Global Toggle",
        category: "Voidgloom Seraph",
        subcategory: "⭍Boss QOL"
    })
    emanEnabled = false;


    // @SwitchProperty({
    //     name: "Toggle Beacon Notification",
    //     description: "Toggle on screen beacon notification",
    //     category: "Voidgloom Seraph",
    //     subcategory: "⭍Boss QOL"
    // })
    // emanBnotifenabled = false;

    // @SliderProperty({
    //     name: 'Beacon Notification Scale',
    //     description: 'Beacon notification size',
    //     category: 'Voidgloom Seraph',
    //     subcategory: "⭍Boss QOL",
    //     min: 1,
    //     max: 10
    // })
    // emanBnotifscale = 5;

    // @SliderProperty({
    //     name: 'Beacon Notification X',
    //     description: 'Beacon notification x',
    //     category: 'Voidgloom Seraph',
    //     subcategory: "⭍Boss QOL",
    //     min: 0,
    //     max: Renderer.screen.getWidth()
    // })
    // emanBnotifx = 1;

    // @SliderProperty({
    //     name: 'Beacon Notification Y',
    //     description: 'Beacon notification y',
    //     category: 'Voidgloom Seraph',
    //     subcategory: "⭍Boss QOL",
    //     min: 0,
    //     max: Renderer.screen.getWidth()
    // })
    // emanBnotify = 1;

    // @SwitchProperty({
    //     name: "Toggle Beacon ESP",
    //     description: "Toggle beacon outlines",
    //     category: "Voidgloom Seraph",
    //     subcategory: "⭍Boss QOL"
    // })
    // emanBespenabled = false;

    // @SwitchProperty({
    //     name: "Toggle Beacon tracers",
    //     description: "Toggles beacon tracers",
    //     category: "Voidgloom Seraph",
    //     subcategory: "⭍Boss QOL"
    // })
    // emanBtracersenabled = false;

    // @SwitchProperty({
    //     name: "Toggle Head esp",
    //     description: "Toggles head esp",
    //     category: "Voidgloom Seraph",
    //     subcategory: "⭍Boss QOL"
    // })
    // emanHespenabled = false;

    // @SwitchProperty({
    //     name: "Toggle Head tracer",
    //     description: "Toggles head tracers",
    //     category: "Voidgloom Seraph",
    //     subcategory: "⭍Boss QOL"
    // })
    // emanHtracersenabled = false;

    constructor() {
        this.initialize(this);
    }
}
export default new Slayer;