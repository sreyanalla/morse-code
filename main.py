def on_forever():
    if input.button_is_pressed(Button.A):
        basic.show_leds("""
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            """)
        music.play_tone(262, music.beat(BeatFraction.HALF))
        basic.clear_screen()
    elif input.button_is_pressed(Button.B):
        basic.show_leds("""
            . . . . .
            . . . . .
            # # # # #
            . . . . .
            . . . . .
            """)
        music.play_tone(262, music.beat(BeatFraction.WHOLE))
        basic.clear_screen()
basic.forever(on_forever)
