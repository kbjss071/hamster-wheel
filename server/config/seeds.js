const db = require('./connection');
const { User, Exercise } = require('../models');

db.once('open', async () => {

  await Exercise.deleteMany();

  const exercises = await Exercise.insertMany([
    {
      "name": "Incline Hammer Curls",
      "type": "strength",
      "muscle": "biceps",
      "equipment": "dumbbell",
      "difficulty": "beginner",
      "instructions": "Seat yourself on an incline bench with a dumbbell in each hand. You should pressed firmly against he back with your feet together. Allow the dumbbells to hang straight down at your side, holding them with a neutral grip. This will be your starting position. Initiate the movement by flexing at the elbow, attempting to keep the upper arm stationary. Continue to the top of the movement and pause, then slowly return to the start position."
    },
    {
      "name": "Wide-grip barbell curl",
      "type": "strength",
      "muscle": "biceps",
      "equipment": "barbell",
      "difficulty": "beginner",
      "instructions": "Stand up with your torso upright while holding a barbell at the wide outer handle. The palm of your hands should be facing forward. The elbows should be close to the torso. This will be your starting position. While holding the upper arms stationary, curl the weights forward while contracting the biceps as you breathe out. Tip: Only the forearms should move. Continue the movement until your biceps are fully contracted and the bar is at shoulder level. Hold the contracted position for a second and squeeze the biceps hard. Slowly begin to bring the bar back to starting position as your breathe in. Repeat for the recommended amount of repetitions.  Variations:  You can also perform this movement using an E-Z bar or E-Z attachment hooked to a low pulley. This variation seems to really provide a good contraction at the top of the movement. You may also use the closer grip for variety purposes."
    },
    {
      "name": "EZ-bar spider curl",
      "type": "strength",
      "muscle": "biceps",
      "equipment": "barbell",
      "difficulty": "intermediate",
      "instructions": "Start out by setting the bar on the part of the preacher bench that you would normally sit on. Make sure to align the barbell properly so that it is balanced and will not fall off. Move to the front side of the preacher bench (the part where the arms usually lay) and position yourself to lay at a 45 degree slant with your torso and stomach pressed against the front side of the preacher bench. Make sure that your feet (especially the toes) are well positioned on the floor and place your upper arms on top of the pad located on the inside part of the preacher bench. Use your arms to grab the barbell with a supinated grip (palms facing up) at about shoulder width apart or slightly closer from each other. Slowly begin to lift the barbell upwards and exhale. Hold the contracted position for a second as you squeeze the biceps. Slowly begin to bring the barbell back to the starting position as your breathe in. . Repeat for the recommended amount of repetitions.  Variation: You can also use dumbbells when performing this exercise. Just make sure you place the dumbbells on the part of the preacher bench where you would normally sit properly."
    },
    {
      "name": "Hammer Curls",
      "type": "strength",
      "muscle": "biceps",
      "equipment": "dumbbell",
      "difficulty": "intermediate",
      "instructions": "Stand up with your torso upright and a dumbbell on each hand being held at arms length. The elbows should be close to the torso. The palms of the hands should be facing your torso. This will be your starting position. Now, while holding your upper arm stationary, exhale and curl the weight forward while contracting the biceps. Continue to raise the weight until the biceps are fully contracted and the dumbbell is at shoulder level. Hold the contracted position for a brief moment as you squeeze the biceps. Tip: Focus on keeping the elbow stationary and only moving your forearm. After the brief pause, inhale and slowly begin the lower the dumbbells back down to the starting position. Repeat for the recommended amount of repetitions.  Variations: There are many possible variations for this movement. For instance, you can perform the exercise sitting down on a bench with or without back support and you can also perform it by alternating arms; first lift the right arm for one repetition, then the left, then the right, etc."
    },
    {
      "name": "EZ-Bar Curl",
      "type": "strength",
      "muscle": "biceps",
      "equipment": "e-z_curl_bar",
      "difficulty": "intermediate",
      "instructions": "Stand up straight while holding an EZ curl bar at the wide outer handle. The palms of your hands should be facing forward and slightly tilted inward due to the shape of the bar. Keep your elbows close to your torso. This will be your starting position. Now, while keeping your upper arms stationary, exhale and curl the weights forward while contracting the biceps. Focus on only moving your forearms. Continue to raise the weight until your biceps are fully contracted and the bar is at shoulder level. Hold the top contracted position for a moment and squeeze the biceps. Then inhale and slowly lower the bar back to the starting position. Repeat for the recommended amount of repetitions.  Variations: You can also perform this movement using an E-Z attachment hooked to a low pulley. This variation seems to really provide a good contraction at the top of the movement. You may also use the closer grip for variety purposes."
    },
    {
      "name": "Zottman Curl",
      "type": "strength",
      "muscle": "biceps",
      "equipment": "None",
      "difficulty": "intermediate",
      "instructions": "Stand up with your torso upright and a dumbbell in each hand being held at arms length. The elbows should be close to the torso. Make sure the palms of the hands are facing each other. This will be your starting position. While holding the upper arm stationary, curl the weights while contracting the biceps as you breathe out. Only the forearms should move. Your wrist should rotate so that you have a supinated (palms up) grip. Continue the movement until your biceps are fully contracted and the dumbbells are at shoulder level. Hold the contracted position for a second as you squeeze the biceps. Now during the contracted position, rotate your wrist until you now have a pronated (palms facing down) grip with the thumb at a higher position than the pinky. Slowly begin to bring the dumbbells back down using the pronated grip. As the dumbbells close your thighs, start rotating the wrist so that you go back to a neutral (palms facing your body) grip. Repeat for the recommended amount of repetitions."
    },
    {
      "name": "Biceps curl to shoulder press",
      "type": "strength",
      "muscle": "biceps",
      "equipment": "dumbbell",
      "difficulty": "beginner",
      "instructions": "Begin in a standing position with a dumbbell in each hand. Your arms should be hanging at your sides with your palms facing forward. Look directly ahead, keeping your chest up, with your feet shoulder-width apart. This will be your starting position. Initiate the movement by flexing the elbows to curl the weight. Do not use momentum or flex through the shoulder, instead use a controlled motion. Execute the pressing movement by extending the arm, flexing and abducting the shoulder to rotate the arm as you press above your head. Pause at the top of the motion before reversing the movement to return to the starting position. Complete the desired number of repetitions before switching to the opposite side."
    },
    {
      "name": "Barbell Curl",
      "type": "strength",
      "muscle": "biceps",
      "equipment": "barbell",
      "difficulty": "intermediate",
      "instructions": "Stand up with your torso upright while holding a barbell at a shoulder-width grip. The palm of your hands should be facing forward and the elbows should be close to the torso. This will be your starting position. While holding the upper arms stationary, curl the weights forward while contracting the biceps as you breathe out. Tip: Only the forearms should move. Continue the movement until your biceps are fully contracted and the bar is at shoulder level. Hold the contracted position for a second and squeeze the biceps hard. Slowly begin to bring the bar back to starting position as your breathe in. Repeat for the recommended amount of repetitions.  Variations:  You can also perform this movement using a straight bar attachment hooked to a low pulley. This variation seems to really provide a good contraction at the top of the movement. You may also use the closer grip for variety purposes."
    },
    {
      "name": "Concentration curl",
      "type": "strength",
      "muscle": "biceps",
      "equipment": "dumbbell",
      "difficulty": "intermediate",
      "instructions": "Sit down on a flat bench with one dumbbell in front of you between your legs. Your legs should be spread with your knees bent and feet on the floor. Use your right arm to pick the dumbbell up. Place the back of your right upper arm on the top of your inner right thigh. Rotate the palm of your hand until it is facing forward away from your thigh. Tip: Your arm should be extended and the dumbbell should be above the floor. This will be your starting position. While holding the upper arm stationary, curl the weights forward while contracting the biceps as you breathe out. Only the forearms should move. Continue the movement until your biceps are fully contracted and the dumbbells are at shoulder level. Tip: At the top of the movement make sure that the little finger of your arm is higher than your thumb. This guarantees a good contraction. Hold the contracted position for a second as you squeeze the biceps. Slowly begin to bring the dumbbells back to starting position as your breathe in. Caution: Avoid swinging motions at any time. Repeat for the recommended amount of repetitions. Then repeat the movement with the left arm.  Variations: This exercise can be performed standing with the torso bent forward and the arm in front of you. In this case, no leg support is used for the back of your arm so you will need to make extra effort to ensure no movement of the upper arm. This is a more challenging version of the exercise and is not recommended for people with lower back issues."
    },
    {
      "name": "Flexor Incline Dumbbell Curls",
      "type": "strength",
      "muscle": "biceps",
      "equipment": "dumbbell",
      "difficulty": "beginner",
      "instructions": "Hold the dumbbell towards the side farther from you so that you have more weight on the side closest to you. (This can be done for a good effect on all bicep dumbbell exercises). Now do a normal incline dumbbell curl, but keep your wrists as far back as possible so as to neutralize any stress that is placed on them. Sit on an incline bench that is angled at 45-degrees while holding a dumbbell on each hand. Let your arms hang down on your sides, with the elbows in, and turn the palms of your hands forward with the thumbs pointing away from the body. Tip: You will keep this hand position throughout the movement as there should not be any twisting of the hands as they come up. This will be your starting position. Curl up the two dumbbells at the same time until your biceps are fully contracted and exhale. Tip: Do not swing the arms or use momentum. Keep a controlled motion at all times. Hold the contracted position for a second at the top. As you inhale, slowly go back to the starting position. Repeat for the recommended amount of repetitions.  Caution: Do not extend your arms totally as you could injure your elbows if you hyperextend them. Also, make sure that on the way down you move slowly to avoid injury. Variations: You can use cables for this movement as well."
    },
    {
      "name": "Landmine twist",
      "type": "strength",
      "muscle": "abdominals",
      "equipment": "other",
      "difficulty": "intermediate",
      "instructions": "Position a bar into a landmine or securely anchor it in a corner. Load the bar to an appropriate weight. Raise the bar from the floor, taking it to shoulder height with both hands with your arms extended in front of you. Adopt a wide stance. This will be your starting position. Perform the movement by rotating the trunk and hips as you swing the weight all the way down to one side. Keep your arms extended throughout the exercise. Reverse the motion to swing the weight all the way to the opposite side. Continue alternating the movement until the set is complete."
    },
    {
      "name": "Elbow plank",
      "type": "strength",
      "muscle": "abdominals",
      "equipment": "body_only",
      "difficulty": "intermediate",
      "instructions": "Get into a prone position on the floor, supporting your weight on your toes and your forearms. Your arms are bent and directly below the shoulder. Keep your body straight at all times, and hold this position as long as possible. To increase difficulty, an arm or leg can be raised."
    },
    {
      "name": "Bottoms Up",
      "type": "strength",
      "muscle": "abdominals",
      "equipment": "body_only",
      "difficulty": "intermediate",
      "instructions": "Begin by lying on your back on the ground. Your legs should be straight and your arms at your side. This will be your starting position. To perform the movement, tuck the knees toward your chest by flexing the hips and knees. Following this, extend your legs directly above you so that they are perpendicular to the ground. Rotate and elevate your pelvis to raise your glutes from the floor. After a brief pause, return to the starting position."
    },
    {
      "name": "Suspended ab fall-out",
      "type": "strength",
      "muscle": "abdominals",
      "equipment": "other",
      "difficulty": "intermediate",
      "instructions": "Adjust the straps so the handles are at an appropriate height, below waist level. Begin standing and grasping the handles. Lean into the straps, moving to an incline push-up position. This will be your starting position. Keeping your arms straight, lean further into the suspension straps, bringing your body closer to the ground, allowing your shoulders to extend, raising your arms up and over your head. Maintain a neutral spine and keep the rest of your body straight, your shoulders being the only joints allowed to move. Pause during the peak contraction, and then return to the starting position."
    },
    {
      "name": "Dumbbell V-Sit Cross Jab",
      "type": "strength",
      "muscle": "abdominals",
      "equipment": "dumbbell",
      "difficulty": "intermediate",
      "instructions": "Begin seated on your butt with your knees bent and feet on the ground. Lean your upper body back to form a 45-degree angle with the floor. Bring your feet off the ground so that your body resembles a \"V\" shape. Grasp a dumbbell in each hand and hold tight to your chest with palms facing each other. This will be your starting position. While keeping your core tight and maintaining your body's \"V\" position, quickly extend your left arm straight out (similar to a jab) and then bring it back to the starting position while simultaneously punching out with the right arm. Your torso and legs may slightly rotate side to side opposite of your hands throughout the movementâ€”this is okay. A punch with each hand counts as one total repetition. Repeat for recommended number of repetitions."
    },
    {
      "name": "Standing cable low-to-high twist",
      "type": "strength",
      "muscle": "abdominals",
      "equipment": "cable",
      "difficulty": "intermediate",
      "instructions": "Connect a standard handle on a tower, and move the cable to the lowest pulley position. With your side to the cable, grab the handle with one hand and step away from the tower. You should be approximately armâ€™s length away from the pulley, with the tension of the weight on the cable. Your outstretched arm should be aligned with the cable. With your feet positioned shoulder width apart, squat down and grab the handle with both hands. Your arms should still be fully extended. In one motion, pull the handle up and across your body until your arms are in a fully-extended position above your head. Keep your back straight and your arms close to your body as you pivot your back foot and straighten your legs to get a full range of motion. Retract your arms and then your body. Return to the neutral position in a slow and controlled manner. Repeat to failure. Then, reposition and repeat the same series of movements on the opposite side.  Tip: You will twist your entire body with this exercise, but focus on getting maximal torso rotation and a strong clinch at the end of the movement. To ensure a good mind-muscle connection, keep your abs tense at all times."
    },
    {
      "name": "Dumbbell spell caster",
      "type": "strength",
      "muscle": "abdominals",
      "equipment": "dumbbell",
      "difficulty": "beginner",
      "instructions": "Hold a dumbbell in each hand with a pronated grip. Your feet should be wide with your hips and knees extended. This will be your starting position. Begin the movement by pulling both of the dumbbells to one side next to your hip, rotating your torso. Keeping your arms straight and the dumbbells parallel to the ground, rotate your torso to swing the weights to your opposite side. Continue alternating, rotating from one side to the other until the set is complete."
    },
    {
      "name": "Decline reverse crunch",
      "type": "strength",
      "muscle": "abdominals",
      "equipment": "other",
      "difficulty": "intermediate",
      "instructions": "Lie on your back on a decline bench and hold on to the top of the bench with both hands. Don't let your body slip down from this position. Hold your legs parallel to the floor using your abs to hold them there while keeping your knees and feet together. Tip: Your legs should be fully extended with a slight bend on the knee. This will be your starting position. While exhaling, move your legs towards the torso as you roll your pelvis backwards and you raise your hips off the bench. At the end of this movement your knees will be touching your chest. Hold the contraction for a second and move your legs back to the starting position while inhaling. Repeat for the recommended amount of repetitions.  Variations: You can do the movement on a flat surface and as you get more advanced you can use ankle weights."
    },
    {
      "name": "Spider crawl",
      "type": "strength",
      "muscle": "abdominals",
      "equipment": "body_only",
      "difficulty": "intermediate",
      "instructions": "Begin in a prone position on the floor. Support your weight on your hands and toes, with your feet together and your body straight. Your arms should be bent to 90 degrees. This will be your starting position. Initiate the movement by raising one foot off of the ground. Externally rotate the leg and bring the knee toward your elbow, as far forward as possible. Return this leg to the starting position and repeat on the opposite side."
    },
    {
      "name": "Cocoons",
      "type": "strength",
      "muscle": "abdominals",
      "equipment": "body_only",
      "difficulty": "intermediate",
      "instructions": "Begin by lying on your back on the ground. Your legs should be straight and your arms extended behind your head. This will be your starting position. To perform the movement, tuck the knees toward your chest, rotating your pelvis to lift your glutes from the floor. As you do so, flex the spine, bringing your arms back over your head to perform a simultaneous crunch motion. After a brief pause, return to the starting position."
    },
    {
      "name": "Hip Circles (Prone)",
      "type": "stretching",
      "muscle": "abductors",
      "equipment": "None",
      "difficulty": "intermediate",
      "instructions": "Position yourself on your hands and knees on the ground. Maintaining good posture, raise one bent knee off of the ground. This will be your starting position. Keeping the knee in a bent position, rotate the femur in an arc, attempting to make a big circle with your knee. Perform this slowly for a number of repetitions, and repeat on the other side."
    },
    {
      "name": "Standing Hip Circles",
      "type": "stretching",
      "muscle": "abductors",
      "equipment": "body_only",
      "difficulty": "beginner",
      "instructions": "Begin standing on one leg, holding to a vertical support. Raise the unsupported knee to 90 degrees. This will be your starting position. Open the hip as far as possible, attempting to make a big circle with your knee. Perform this movement slowly for a number of repetitions, and repeat on the other side."
    },
    {
      "name": "Clam",
      "type": "strength",
      "muscle": "abductors",
      "equipment": "None",
      "difficulty": "intermediate",
      "instructions": "Begin by lying on your side on the ground. Support your head on your left arm. Flex the hips to 45 degrees and the knees to approximately 90 degrees, with your right leg directly on top of your left. This will be your starting position. Initiate the exercise by abducting your right leg, pushing your knee away from the midline of your body. Maintain contact between your feet throughout the movement. Pause at the top of the motion, and then return to the starting position. Repeat for the desired number of repetitions. Do both sides."
    },
    {
      "name": "Iliotibial band SMR",
      "type": "stretching",
      "muscle": "abductors",
      "equipment": "foam_roll",
      "difficulty": "intermediate",
      "instructions": "Lay on your side, with the bottom leg placed onto a foam roller between the hip and the knee. The other leg can be crossed in front of you. Place as much of your weight as is tolerable onto your bottom leg; there is no need to keep your bottom leg in contact with the ground. Be sure to relax the muscles of the leg you are stretching. Roll your leg over the foam from you hip to your knee, pausing for 10-30 seconds at points of tension. Repeat with the opposite leg."
    },
    {
      "name": "Thigh abductor",
      "type": "strength",
      "muscle": "abductors",
      "equipment": "machine",
      "difficulty": "intermediate",
      "instructions": "To begin, sit down on the abductor machine and select a weight you are comfortable with. When your legs are positioned properly, grip the handles on each side. Your entire upper body (from the waist up) should be stationary. This is the starting position. Slowly press against the machine with your legs to move them away from each other while exhaling. Feel the contraction for a second and begin to move your legs back to the starting position while breathing in. Note: Remember to keep your upper body stationary to prevent any injuries from occurring. Repeat for the recommended amount of repetitions."
    },
    {
      "name": "Fire Hydrant",
      "type": "strength",
      "muscle": "abductors",
      "equipment": "body_only",
      "difficulty": "beginner",
      "instructions": "Position yourself on your hands and knees on the ground. This will be your starting position. Keeping the knee in a bent position, abduct the femur, moving your knee away from the midline of the body. Pause at the top of the motion, and then slowly return to the starting position. Perform this slowly for a number of repetitions, and repeat on the other side."
    },
    {
      "name": "Windmills",
      "type": "stretching",
      "muscle": "abductors",
      "equipment": "body_only",
      "difficulty": "intermediate",
      "instructions": "Lie on your back with your arms extended out to the sides and your legs straight. This will be your starting position. Lift one leg and quickly cross it over your body, attempting to touch the ground near the opposite hand. Return to the starting position, and repeat with the opposite leg. Continue to alternate for 10-20 repetitions."
    },
    {
      "name": "Monster Walk",
      "type": "strength",
      "muscle": "abductors",
      "equipment": "body_only",
      "difficulty": "intermediate",
      "instructions": "Place a band around both ankles and another around both knees. There should be enough tension that they are tight when your feet are shoulder width apart. To begin, take short steps forward alternating your left and right foot. After several steps, do just the opposite and walk backward to where you started."
    },
    {
      "name": "IT Band and Glute Stretch",
      "type": "stretching",
      "muscle": "abductors",
      "equipment": "body_only",
      "difficulty": "intermediate",
      "instructions": "Loop a belt, rope, or band around one of your feet, and swing that leg across your body to the opposite side, keeping the leg extended as you lay on the ground. This will be your starting position. Keeping your foot off of the floor, pull on the belt, using the tension to pull the toes up. Hold for 10-20 seconds, and repeat on the other side."
    },
    {
      "name": "Single-leg lying cross-over stretch",
      "type": "stretching",
      "muscle": "abductors",
      "equipment": "body_only",
      "difficulty": "beginner",
      "instructions": "Lie on your back with your legs extended. Cross one leg over your body with the knee bent, attempting to touch the knee to the ground. Your partner should kneel beside you, holding your shoulder down with one hand and controlling the crossed leg with the other. this will be your starting position. Attempt to raise the bent knee off of the ground as your partner prevents any actual movement. After 10-20 seconds, relax the leg as your partner gently presses the knee towards the floor. Repeat with the other side."
    },
    {
      "name": "Dumbbell Bench Press",
      "type": "strength",
      "muscle": "chest",
      "equipment": "dumbbell",
      "difficulty": "intermediate",
      "instructions": "Lie down on a flat bench with a dumbbell in each hand resting on top of your thighs. The palms of your hands will be facing each other. Then, using your thighs to help raise the dumbbells up, lift the dumbbells one at a time so that you can hold them in front of you at shoulder width. Once at shoulder width, rotate your wrists forward so that the palms of your hands are facing away from you. The dumbbells should be just to the sides of your chest, with your upper arm and forearm creating a 90 degree angle. Be sure to maintain full control of the dumbbells at all times. This will be your starting position. Then, as you breathe out, use your chest to push the dumbbells up. Lock your arms at the top of the lift and squeeze your chest, hold for a second and then begin coming down slowly. Tip: Ideally, lowering the weight should take about twice as long as raising it. Repeat the movement for the prescribed amount of repetitions of your training program.  Caution: When you are done, do not drop the dumbbells next to you as this is dangerous to your rotator cuff in your shoulders and others working out around you. Just lift your legs from the floor bending at the knees, twist your wrists so that the palms of your hands are facing each other and place the dumbbells on top of your thighs. When both dumbbells are touching your thighs simultaneously push your upper torso up (while pressing the dumbbells on your thighs) and also perform a slight kick forward with your legs (keeping the dumbbells on top of the thighs). By doing this combined movement, momentum will help you get back to a sitting position with both dumbbells still on top of your thighs. At this moment you can place the dumbbells on the floor. Variations: Another variation of this exercise is to perform it with the palms of the hands facing each other. Also, you can perform the exercise with the palms facing each other and then twisting the wrist as you lift the dumbbells so that at the top of the movement the palms are facing away from the body. I personally do not use this variation very often as it seems to be hard on my shoulders."
    },
    {
      "name": "Pushups",
      "type": "strength",
      "muscle": "chest",
      "equipment": "body_only",
      "difficulty": "intermediate",
      "instructions": "Lie on the floor face down and place your hands about 36 inches apart while holding your torso up at arms length. Next, lower yourself downward until your chest almost touches the floor as you inhale. Now breathe out and press your upper body back up to the starting position while squeezing your chest. After a brief pause at the top contracted position, you can begin to lower yourself downward again for as many repetitions as needed.  Variations: If you are new at this exercise and do not have the strength to perform it, you can either bend your legs at the knees to take off resistance or perform the exercise against the wall instead of the floor. For the most advanced lifters, you can place your feet at a high surface such as a bench in order to increase the resistance and to target the upper chest more."
    },
    {
      "name": "Close-grip bench press",
      "type": "strength",
      "muscle": "chest",
      "equipment": "barbell",
      "difficulty": "intermediate",
      "instructions": "Lie back on a flat bench. Using a close grip (around shoulder width), lift the bar from the rack and hold it straight over you with your arms locked. This will be your starting position. As you breathe in, come down slowly until you feel the bar on your middle chest. Tip: Make sure that - as opposed to a regular bench press - you keep the elbows close to the torso at all times in order to maximize triceps involvement. After a second pause, bring the bar back to the starting position as you breathe out and push the bar using your triceps muscles. Lock your arms in the contracted position, hold for a second and then start coming down slowly again. Tip: It should take at least twice as long to go down than to come up. Repeat the movement for the prescribed amount of repetitions. When you are done, place the bar back in the rack.  Caution: If you are new at this exercise, it is advised that you use a spotter. If no spotter is available, then be conservative with the amount of weight used. Also, beware of letting the bar drift too far forward. You want the bar to fall on your middle chest and nowhere else. Variations: This exercise can also be performed with an e-z bar using the inner handle as well as dumbbells, in which case the palms of the hands will be facing each other."
    },
    {
      "name": "Dumbbell Flyes",
      "type": "strength",
      "muscle": "chest",
      "equipment": "dumbbell",
      "difficulty": "intermediate",
      "instructions": "Lie down on a flat bench with a dumbbell on each hand resting on top of your thighs. The palms of your hand will be facing each other. Then using your thighs to help raise the dumbbells, lift the dumbbells one at a time so you can hold them in front of you at shoulder width with the palms of your hands facing each other. Raise the dumbbells up like you're pressing them, but stop and hold just before you lock out. This will be your starting position. With a slight bend on your elbows in order to prevent stress at the biceps tendon, lower your arms out at both sides in a wide arc until you feel a stretch on your chest. Breathe in as you perform this portion of the movement. Tip: Keep in mind that throughout the movement, the arms should remain stationary; the movement should only occur at the shoulder joint. Return your arms back to the starting position as you squeeze your chest muscles and breathe out. Tip: Make sure to use the same arc of motion used to lower the weights. Hold for a second at the contracted position and repeat the movement for the prescribed amount of repetitions.  Variations: You may want to use a palms facing forward version for different stimulation."
    },
    {
      "name": "Incline dumbbell bench press",
      "type": "strength",
      "muscle": "chest",
      "equipment": "dumbbell",
      "difficulty": "intermediate",
      "instructions": "Lie back on an incline bench with a dumbbell in each hand atop your thighs. The palms of your hands will be facing each other. Then, using your thighs to help push the dumbbells up, lift the dumbbells one at a time so that you can hold them at shoulder width. Once you have the dumbbells raised to shoulder width, rotate your wrists forward so that the palms of your hands are facing away from you. This will be your starting position. Be sure to keep full control of the dumbbells at all times. Then breathe out and push the dumbbells up with your chest. Lock your arms at the top, hold for a second, and then start slowly lowering the weight. Tip Ideally, lowering the weights should take about twice as long as raising them. Repeat the movement for the prescribed amount of repetitions. When you are done, place the dumbbells back on your thighs and then on the floor. This is the safest manner to release the dumbbells.  Variations: You can use several angles on the incline bench if the bench you are using is adjustable. Another variation of this exercise is to perform it with the palms of the hands facing each other. Also, you can perform the exercise with the palms facing each other and then twisting the wrist as you lift the dumbbells so that at the top of the movement the palms are facing away from the body. I personally do not use this variation very often as it seems to be hard on my shoulders."
    },
    {
      "name": "Low-cable cross-over",
      "type": "strength",
      "muscle": "chest",
      "equipment": "cable",
      "difficulty": "intermediate",
      "instructions": "To move into the starting position, place the pulleys at the low position, select the resistance to be used and grasp a handle in each hand. Step forward, gaining tension in the pulleys. Your palms should be facing forward, hands below the waist, and your arms straight. This will be your starting position. With a slight bend in your arms, draw your hands upward and toward the midline of your body. Your hands should come together in front of your chest, palms facing up. Return your arms back to the starting position after a brief pause."
    },
    {
      "name": "Barbell Bench Press - Medium Grip",
      "type": "strength",
      "muscle": "chest",
      "equipment": "barbell",
      "difficulty": "intermediate",
      "instructions": "Lie back on a flat bench. Using a medium width grip (a grip that creates a 90-degree angle in the middle of the movement between the forearms and the upper arms), lift the bar from the rack and hold it straight over you with your arms locked. This will be your starting position. From the starting position, breathe in and begin coming down slowly until the bar touches your middle chest. After a brief pause, push the bar back to the starting position as you breathe out. Focus on pushing the bar using your chest muscles. Lock your arms and squeeze your chest in the contracted position at the top of the motion, hold for a second and then start coming down slowly again. Tip: Ideally, lowering the weight should take about twice as long as raising it. Repeat the movement for the prescribed amount of repetitions. When you are done, place the bar back in the rack.  Caution: If you are new at this exercise, it is advised that you use a spotter. If no spotter is available, then be conservative with the amount of weight used. Also, beware of letting the bar drift too far forward. You want the bar to touch your middle chest and nowhere else. Don't bounce the weight off your chest. You should be in full control of the barbell at all times."
    },
    {
      "name": "Chest dip",
      "type": "strength",
      "muscle": "chest",
      "equipment": "other",
      "difficulty": "intermediate",
      "instructions": "For this exercise you will need access to parallel bars. To get yourself into the starting position, hold your body at arms length (arms locked) above the bars. While breathing in, lower yourself slowly with your torso leaning forward around 30 degrees or so and your elbows flared out slightly until you feel a slight stretch in the chest. Once you feel the stretch, use your chest to bring your body back to the starting position as you breathe out. Tip: Remember to squeeze the chest at the top of the movement for a second. Repeat the movement for the prescribed amount of repetitions.  Variations: If you are new at this exercise and do not have the strength to perform it, use a dip assist machine if available. These machines use weight to help you push your bodyweight. Otherwise, a spotter holding your legs can help. More advanced lifters can add weight to the exercise by using a weight belt that allows the addition of weighted plates."
    },
    {
      "name": "Decline Dumbbell Flyes",
      "type": "strength",
      "muscle": "chest",
      "equipment": "dumbbell",
      "difficulty": "intermediate",
      "instructions": "Secure your legs at the end of the decline bench and lie down with a dumbbell on each hand on top of your thighs. The palms of your hand will be facing each other. Once you are laying down, move the dumbbells in front of you at shoulder width. The palms of the hands should be facing each other and the arms should be perpendicular to the floor and fully extended. This will be your starting position. With a slight bend on your elbows in order to prevent stress at the biceps tendon, lower your arms out at both sides in a wide arc until you feel a stretch on your chest. Breathe in as you perform this portion of the movement. Tip: Keep in mind that throughout the movement, the arms should remain stationary; the movement should only occur at the shoulder joint. Return your arms back to the starting position as you squeeze your chest muscles and breathe out. Tip: Make sure to use the same arc of motion used to lower the weights. Hold for a second at the contracted position and repeat the movement for the prescribed amount of repetitions.  Variation: You may want to use a palms facing forward version for different stimulation."
    },
    {
      "name": "Bodyweight Flyes",
      "type": "strength",
      "muscle": "chest",
      "equipment": "e-z_curl_bar",
      "difficulty": "beginner",
      "instructions": "Position two equally loaded EZ bars on the ground next to each other. Ensure they are able to roll. Assume a push-up position over the bars, supporting your weight on your toes and hands with your arms extended and body straight. Place your hands on the bars. This will be your starting position. Using a slow and controlled motion, move your hands away from the midline of your body, rolling the bars apart. Inhale during this portion of the motion. After moving the bars as far apart as you can, return to the starting position by pulling them back together. Exhale as you perform this movement."
    },
    {
      "name": "Atlas Stones",
      "type": "strongman",
      "muscle": "lower_back",
      "equipment": "other",
      "difficulty": "intermediate",
      "instructions": "Begin with the atlas stone between your feet. Bend at the hips to wrap your arms vertically around the Atlas Stone, attempting to get your fingers underneath the stone. Many stones will have a small flat portion on the bottom, which will make the stone easier to hold. Pulling the stone into your torso, drive through the back half of your feet to pull the stone from the ground. As the stone passes the knees, lap it by sitting backward, pulling the stone on top of your thighs. Sit low, getting the stone high onto your chest as you change your grip to reach over the stone. Stand, driving through with your hips. Close distance to the loading platform, and lean back, extending the hips to get the stone as high as possible."
    },
    {
      "name": "Barbell deficit deadlift",
      "type": "powerlifting",
      "muscle": "lower_back",
      "equipment": "barbell",
      "difficulty": "beginner",
      "instructions": "Begin by having a platform or weight plates that you can stand on, usually 1-3 inches in height. Approach the bar so that it is centered over your feet. You feet should be about hip width apart. Bend at the hip to grip the bar at shoulder width, allowing your shoulder blades to protract. Typically, you would use an overhand grip or an over/under grip on heavier sets. With your feet, and your grip set, take a big breath and then lower your hips and bend the knees until your shins contact the bar. Look forward with your head, keep your chest up and your back arched, and begin driving through the heels to move the weight upward. After the bar passes the knees, aggressively pull the bar back, pulling your shoulder blades together as you drive your hips forward into the bar. Lower the bar by bending at the hips and guiding it to the floor."
    },
    {
      "name": "Back extension",
      "type": "strength",
      "muscle": "lower_back",
      "equipment": "body_only",
      "difficulty": "intermediate",
      "instructions": "Lie face down on a hyperextension bench, tucking your ankles securely under the footpads. Adjust the upper pad if possible so your upper thighs lie flat across the wide pad, leaving enough room for you to bend at the waist without any restriction. With your body straight, cross your arms in front of you (my preference) or behind your head. This will be your starting position. Tip: You can also hold a weight plate for extra resistance in front of you under your crossed arms. Start bending forward slowly at the waist as far as you can while keeping your back flat. Inhale as you perform this movement. Keep moving forward until you feel a nice stretch on the hamstrings and you can no longer keep going without a rounding of the back. Tip: Never round the back as you perform this exercise. Also, some people can go farther than others. The key thing is that you go as far as your body allows you to without rounding the back. Slowly raise your torso back to the initial position as you inhale. Tip: Avoid the temptation to arch your back past a straight line. Also, do not swing the torso at any time in order to protect the back from injury. Repeat for the recommended amount of repetitions.  Variations: This exercise can also be performed without a hyperextension bench, but in this case you will need a spotter. Also, a similar exercise to this one is the good morning and the stiff-legged deadlift."
    },
    {
      "name": "Axle Deadlift",
      "type": "strongman",
      "muscle": "lower_back",
      "equipment": "other",
      "difficulty": "beginner",
      "instructions": "Approach the bar so that it is centered over your feet. You feet should be about hip width apart. Bend at the hip to grip the bar at shoulder width, allowing your shoulder blades to protract. Typically, you would use an over/under grip. With your feet and your grip set, take a big breath and then lower your hips and flex the knees until your shins contact the bar. Look forward with your head, keep your chest up and your back arched, and begin driving through the heels to move the weight upward. After the bar passes the knees, aggressively pull the bar back, pulling your shoulder blades together as you drive your hips forward into the bar. Lower the bar by bending at the hips and guiding it to the floor."
    },
    {
      "name": "Hyperextensions With No Hyperextension Bench",
      "type": "strength",
      "muscle": "lower_back",
      "equipment": "body_only",
      "difficulty": "beginner",
      "instructions": "With someone holding down your legs, slide yourself down to the edge a flat bench until your hips hang off the end of the bench. Tip: Your entire upper body should be hanging down towards the floor. Also, you will be in the same position as if you were on a hyperextension bench but the range of motion will be shorter due to the height of the flat bench vs. that of the hyperextension bench. With your body straight, cross your arms in front of you (my preference) or behind your head. This will be your starting position. Tip: You can also hold a weight plate for extra resistance in front of you under your crossed arms. Start bending forward slowly at the waist as far as you can while keeping your back flat. Inhale as you perform this movement. Keep moving forward until you almost touch the floor or you feel a nice stretch on the hamstrings (whichever comes first). Tip: Never round the back as you perform this exercise. Slowly raise your torso back to the initial position as you exhale. Tip: Avoid the temptation to arch your back past a straight line. Also, do not swing the torso at any time in order to protect the back from injury. Repeat for the recommended amount of repetitions.  Variations: This exercise can also be performed using a hyperextension bench. Also, a similar exercise to this one is the good morning and the stiff-legged deadlift."
    },
    {
      "name": "Deadlift with Bands",
      "type": "powerlifting",
      "muscle": "lower_back",
      "equipment": "barbell",
      "difficulty": "beginner",
      "instructions": "To deadlift with short bands, simply loop them over the bar before you start, and step into them to set up. For long bands, they will need to be anchored to a secure base, such as heavy dumbbells or a rack. Approach the bar so that it is centered over your feet. You feet should be about hip width apart. Ensure that the bands are under the back half of your foot (for short bands), directly where you are driving into the floor. Bend at the hip to grip the bar at shoulder width, allowing your shoulder blades to protract. Typically, you would use an overhand grip or an over/under grip on heavier sets.2.  With your feet, and your grip set, take a big breath and then lower your hips and bend the knees until your shins contact the bar. Look forward with your head, keep your chest up and your back arched, and begin driving through the heels to move the weight upward. After the bar passes the knees, aggressively pull the bar back, pulling your shoulder blades together as you drive your hips forward into the bar. Lower the bar by bending at the hips and guiding it to the floor."
    },
    {
      "name": "Deadlift with Bands",
      "type": "powerlifting",
      "muscle": "lower_back",
      "equipment": "barbell",
      "difficulty": "beginner",
      "instructions": "To deadlift with short bands, simply loop them over the bar before you start, and step into them to set up. For long bands, they will need to be anchored to a secure base, such as heavy dumbbells or a rack. Approach the bar so that it is centered over your feet. You feet should be about hip width apart. Ensure that the bands are under the back half of your foot (for short bands), directly where you are driving into the floor. Bend at the hip to grip the bar at shoulder width, allowing your shoulder blades to protract. Typically, you would use an overhand grip or an over/under grip on heavier sets.2.  With your feet, and your grip set, take a big breath and then lower your hips and bend the knees until your shins contact the bar. Look forward with your head, keep your chest up and your back arched, and begin driving through the heels to move the weight upward. After the bar passes the knees, aggressively pull the bar back, pulling your shoulder blades together as you drive your hips forward into the bar. Lower the bar by bending at the hips and guiding it to the floor."
    },
    {
      "name": "Deadlift with Chains",
      "type": "powerlifting",
      "muscle": "lower_back",
      "equipment": "barbell",
      "difficulty": "beginner",
      "instructions": "You can attach the chains to the sleeves of the bar, or just drape the middle over the bar so there is a greater weight increase as you lift. Approach the bar so that it is centered over your feet. You feet should be about hip width apart. Bend at the hip to grip the bar at shoulder width, allowing your shoulder blades to protract. Typically, you would use an overhand grip or an over/under grip on heavier sets. With your feet, and your grip set, take a big breath and then lower your hips and bend the knees until your shins contact the bar. Look forward with your head, keep your chest up and your back arched, and begin driving through the heels to move the weight upward. After the bar passes the knees, aggressively pull the bar back, pulling your shoulder blades together as you drive your hips forward into the bar. Lower the bar by bending at the hips and guiding it to the floor."
    },
    {
      "name": "Rack Pull with Bands",
      "type": "powerlifting",
      "muscle": "lower_back",
      "equipment": "barbell",
      "difficulty": "beginner",
      "instructions": "Set up in a power rack with the bar on the pins. The pins should be set to the desired point; just below the knees, just above, or in the mid thigh position. Attach bands to the base of the rack, or secure them with dumbbells. Attach the other end to the bar. You may need to choke the bands to provide tension. Position yourself against the bar in proper deadlifting position. Your feet should be under your hips, your grip shoulder width, back arched, and hips back to engage the hamstrings. Since the weight is typically heavy, you may use a mixed grip, a hook grip, or use straps to aid in holding the weight. With your head looking forward, extend through the hips and knees, pulling the weight up and back until lockout. Be sure to pull your shoulders back as you complete the movement. Return the weight to the pins and repeat."
    },
    {
      "name": "Superman",
      "type": "stretching",
      "muscle": "lower_back",
      "equipment": "body_only",
      "difficulty": "intermediate",
      "instructions": "To begin, lie straight and face down on the floor or exercise mat. Your arms should be fully extended in front of you. This is the starting position. Simultaneously raise your arms, legs, and chest off of the floor and hold this contraction for 2 seconds. Tip: Squeeze your lower back to get the best results from this exercise. Remember to exhale during this movement. Note: When holding the contracted position, you should look like superman when he is flying. Slowly begin to lower your arms, legs and chest back down to the starting position while inhaling. Repeat for the recommended amount of repetitions prescribed in your program.  Variations: You can also perform this exercise using one arm and leg at a time. Simply elevating your left leg, arm and side of your chest and do the same with the right side."
    },
    {
      "name": "Rickshaw Carry",
      "type": "strongman",
      "muscle": "forearms",
      "equipment": "other",
      "difficulty": "beginner",
      "instructions": "Position the frame at the starting point, and load with the appropriate weight. Standing in the center of the frame, begin by gripping the handles and driving through your heels to lift the frame. Ensure your chest and head are up and your back is straight. Immediately begin walking briskly with quick, controlled steps. Keep your chest up and head forward, and make sure you continue breathing. Bring the frame to the ground after you have reached the end point."
    },
    {
      "name": "Palms-down wrist curl over bench",
      "type": "strength",
      "muscle": "forearms",
      "equipment": "barbell",
      "difficulty": "intermediate",
      "instructions": "Start out by placing a barbell on one side of a flat bench. Kneel down on both of your knees so that your body is facing the flat bench. Use your arms to grab the barbell with a pronated grip (palms down) and bring them up so that your forearms are resting against the flat bench. Your wrists should be hanging over the edge. Start out by curling your wrist upwards and exhaling. Slowly lower your wrists back down to the starting position while inhaling. Your forearms should be stationary as your wrist is the only movement needed to perform this exercise. Repeat for the recommended amount of repetitions.  Variations:  This exercise can also be performed sitting down by using your thighs as a resting position for your forearms. Your wrist can hang over your knees and the same movements as mentioned above can be performed. You can also use a dumbbell instead of a barbell."
    },
    {
      "name": "Straight-bar wrist roll-up",
      "type": "strength",
      "muscle": "forearms",
      "equipment": "None",
      "difficulty": "intermediate",
      "instructions": "Hold a barbell with both hands and your palms facing down; hands spaced about shoulder width. This will be your starting position. Alternating between each of your hands, perform the movement by extending the wrist as though you were rolling up a newspaper. Continue alternating back and forth until failure. Reverse the motion by flexing the wrist, rolling the opposite direction. Continue the alternating motion until failure."
    },
    {
      "name": "Dumbbell farmer's walk",
      "type": "strongman",
      "muscle": "forearms",
      "equipment": "other",
      "difficulty": "intermediate",
      "instructions": "There are various implements that can be used for the farmers walk. These can also be performed with heavy dumbbells or short bars if these implements aren't available. Begin by standing between the implements. After gripping the handles, lift them up by driving through your heels, keeping your back straight and your head up. Walk taking short, quick steps, and don't forget to breathe. Move for a given distance, typically 50-100 feet, as fast as possible."
    },
    {
      "name": "Palms-up wrist curl over bench",
      "type": "strength",
      "muscle": "forearms",
      "equipment": "barbell",
      "difficulty": "intermediate",
      "instructions": "Start out by placing a barbell on one side of a flat bench. Kneel down on both of your knees so that your body is facing the flat bench. Use your arms to grab the barbell with a supinated grip (palms up) and bring them up so that your forearms are resting against the flat bench. Your wrists should be hanging over the edge. Start out by curling your wrist upwards and exhaling. Slowly lower your wrists back down to the starting position while inhaling. Your forearms should be stationary as your wrist is the only movement needed to perform this exercise. Repeat for the recommended amount of repetitions.  Variations:  This exercise can also be performed sitting down by using your thighs as a resting position for your forearms. Your wrist can hang over your knees and the same movements as mentioned above can be performed. You can also use a dumbbell instead of a barbell."
    },
    {
      "name": "Standing behind-the-back wrist curl",
      "type": "strength",
      "muscle": "forearms",
      "equipment": "barbell",
      "difficulty": "beginner",
      "instructions": "Start by standing straight and holding a barbell behind your glutes at arm's length while using a pronated grip (palms will be facing back away from the glutes) and having your hands shoulder width apart from each other. You should be looking straight forward while your feet are shoulder width apart from each other. This is the starting position. While exhaling, slowly elevate the barbell up by curling your wrist in a semi-circular motion towards the ceiling. Note: Your wrist should be the only body part moving for this exercise. Hold the contraction for a second and lower the barbell back down to the starting position while inhaling. Repeat for the recommended amount of repetitions. When finished, lower the barbell down to the squat rack or the floor by bending the knees. Tip: It is easiest to either pick it up from a squat rack or have a partner hand it to you.  Variations: You can also perform this exercise with dumbbells using the same movements as described above. Another option is to use one dumbbell at a time for better isolation."
    },
    {
      "name": "Seated finger curl",
      "type": "strength",
      "muscle": "forearms",
      "equipment": "barbell",
      "difficulty": "beginner",
      "instructions": "Hold a barbell with both hands and your palms facing up; hands spaced about shoulder width. Place your feet flat on the floor, at a distance that is slightly wider than shoulder width apart. This will be your starting position. Lower the bar as far as possible by extending the fingers. Allowing the bar to roll down the hands, catch the bar with the final joint in the fingers. Now curl bar up as high as possible by closing your hands while exhaling. Hold the contraction at the top."
    },
    {
      "name": "Seated Two-Arm Palms-Up Low-Pulley Wrist Curl",
      "type": "strength",
      "muscle": "forearms",
      "equipment": "cable",
      "difficulty": "beginner",
      "instructions": "Put a bench in front of a low pulley machine that has a barbell or EZ Curl attachment on it. Move the bench far enough away so that when you bring the handle to the top of your thighs tension is created on the cable due to the weight stack being moved up. Now hold the handle with both hands, palms up, using a shoulder-width grip. Step back and sit on the bench with your feet about shoulder width apart, firmly on the floor. Lean forward and place the forearms on your thighs with the back of your wrists over your knees. This will be your starting position. Lower the bar as far as possible, while inhaling and keeping a tight grip. Now curl the bar up as high as possible while contracting the forearms. Tip: Only the wrist should move; not the forearms. After a second contraction at the top go back to the starting position as you inhale. Repeat for the recommended amount of repetitions.  Variations: This exercise can be performed also with a single handle attachment (one arm at a time) or with free weights (barbells or dumbbells) using one arm and two arm variations."
    },
    {
      "name": "Wrist Roller",
      "type": "strength",
      "muscle": "forearms",
      "equipment": "other",
      "difficulty": "beginner",
      "instructions": "To begin, stand straight up grabbing a wrist roller using a pronated grip (palms facing down). Your feet should be shoulder width apart. Slowly lift both arms until they are fully extended and parallel to the floor in front of you. Note: Make sure the rope is not wrapped around the roller. Your entire body should be stationary except for the forearms. This is the starting position. Rotate one wrist at a time in an upward motion to bring the weight up to the bar by rolling the rope around the roller. Once the weight has reached the bar, slowly begin to lower the weight back down by rotating the wrist in a downward motion until the weight reaches the starting position. Repeat for the prescribed amount of repetitions in your program."
    },
    {
      "name": "Seated One-Arm Dumbbell Palms-Up Wrist Curl",
      "type": "strength",
      "muscle": "forearms",
      "equipment": "dumbbell",
      "difficulty": "beginner",
      "instructions": "Sit on a flat bench with a dumbbell in your right hand. Place your feet flat on the floor, at a distance that is slightly wider than shoulder width apart. Lean forward and place your right forearm on top of your upper right thigh with your palm up. Tip: Make sure that the front of the wrist lies on top of your knees. This will be your starting position. Lower the dumbbell as far as possible as you keep a tight grip on the dumbbell. Inhale as you perform this movement. Now curl the dumbbell as high as possible as you contract the forearms and as you exhale. Keep the contraction for a second before you lower again. Tip: The only movement should happen at the wrist. Perform for the recommended amount of repetitions, switch arms and repeat the movement.  Variations: You can also do this movement with two arms at a time, one on each knee, or using a barbell."
    },
    {
      "name": "Triceps dip",
      "type": "strength",
      "muscle": "triceps",
      "equipment": "body_only",
      "difficulty": "intermediate",
      "instructions": "To get into the starting position, hold your body at arm's length with your arms nearly locked above the bars. Now, inhale and slowly lower yourself downward. Your torso should remain upright and your elbows should stay close to your body. This helps to better focus on tricep involvement. Lower yourself until there is a 90 degree angle formed between the upper arm and forearm. Then, exhale and push your torso back up using your triceps to bring your body back to the starting position. Repeat the movement for the prescribed amount of repetitions.  Variations: If you are new at this exercise and do not have the strength to perform it, use a dip assist machine if available. These machines use weight to help you push your bodyweight. Otherwise, a spotter holding your legs can help. More advanced lifters can add weight to the exercise by using a weight belt that allows the addition of weighted plates."
    },
    {
      "name": "Decline EZ-bar skullcrusher",
      "type": "strength",
      "muscle": "triceps",
      "equipment": "e-z_curl_bar",
      "difficulty": "intermediate",
      "instructions": "Secure your legs at the end of the decline bench and slowly lay down on the bench. Using a close grip (a grip that is slightly less than shoulder width), lift the EZ bar from the rack and hold it straight over you with your arms locked and elbows in. The arms should be perpendicular to the floor. This will be your starting position. Tip: In order to protect your rotator cuff, it is best if you have a spotter help you lift the barbell off the rack. As you breathe in and you keep the upper arms stationary, bring the bar down slowly by moving your forearms in a semicircular motion towards you until you feel the bar slightly touch your forehead. Breathe in as you perform this portion of the movement. Lift the bar back to the starting position by contracting the triceps and exhaling. Repeat until the recommended amount of repetitions is performed.  Variations: You can use a straight bar or dumbbells to perform this movement. You can also perform it on a flat bench as well."
    },
    {
      "name": "Dumbbell floor press",
      "type": "powerlifting",
      "muscle": "triceps",
      "equipment": "dumbbell",
      "difficulty": "intermediate",
      "instructions": "Lay on the floor holding dumbbells in your hands. Your knees can be bent. Begin with the weights fully extended above you. Lower the weights until your upper arm comes in contact with the floor. You can tuck your elbows to emphasize triceps size and strength, or to focus on your chest angle your arms to the side. Pause at the bottom, and then bring the weight together at the top by extending through the elbows."
    },
    {
      "name": "Cable V-bar push-down",
      "type": "strength",
      "muscle": "triceps",
      "equipment": "cable",
      "difficulty": "intermediate",
      "instructions": "Attach a V-Bar to a high pulley and grab with an overhand grip (palms facing down) at shoulder width. Standing upright with the torso straight and a very small inclination forward, bring the upper arms close to your body and perpendicular to the floor. The forearms should be pointing up towards the pulley as they hold the bar. The thumbs should be higher than the small finger. This is your starting position. Using the triceps, bring the bar down until it touches the front of your thighs and the arms are fully extended perpendicular to the floor. The upper arms should always remain stationary next to your torso and only the forearms should move. Exhale as you perform this movement. After a second hold at the contracted position, bring the V-Bar slowly up to the starting point. Breathe in as you perform this step. Repeat for the recommended amount of repetitions.  Variations: There are many variations to this movement. For instance you can use an E-Z bar attachment as well as a straight cable bar attachment for different variations of the exercise. Also, you can attach a rope to the pulley as well as using a reverse grip on the bar exercises. Just like the Triceps Pushdown but with the V-Bar attachment."
    },
    {
      "name": "Weighted bench dip",
      "type": "strength",
      "muscle": "triceps",
      "equipment": "body_only",
      "difficulty": "intermediate",
      "instructions": "For this exercise you will need to place a bench behind your back and another one in front of you. With the benches perpendicular to your body, hold on to one bench on its edge with the hands close to your body, separated at shoulder width. Your arms should be fully extended. The legs will be extended forward on top of the other bench. Your legs should be parallel to the floor while your torso is to be perpendicular to the floor. Have your partner place the dumbbell on your lap. Note: This exercise is best performed with a partner as placing the weight on your lap can be challenging and cause injury without assistance. This will be your starting position. Slowly lower your body as you inhale by bending at the elbows until you lower yourself far enough to where there is an angle slightly smaller than 90 degrees between the upper arm and the forearm. Tip: Keep the elbows as close as possible throughout the movement. Forearms should always be pointing down. Using your triceps to bring your torso up again, lift yourself back to the starting position while exhaling. Repeat for the recommended amount of repetitions.  Caution: By placing your legs on top of another flat bench in front of you, the exercise becomes more challenging. It is best to attempt this exercise without any weights at first in order to get used to the movements required for good form. If that variation also becomes easy, then you can have a partner place plates on top of your lap. Make sure that in this case the partner ensures that the weights stay there throughout the movement."
    },
    {
      "name": "EZ-Bar Skullcrusher",
      "type": "strength",
      "muscle": "triceps",
      "equipment": "e-z_curl_bar",
      "difficulty": "intermediate",
      "instructions": "Using a close grip, lift the EZ bar and hold it with your elbows in as you lie on the bench. Your arms should be perpendicular to the floor. This will be your starting position. Keeping the upper arms stationary, lower the bar by allowing the elbows to flex. Inhale as you perform this portion of the movement. Pause once the bar is directly above the forehead. Lift the bar back to the starting position by extending the elbow and exhaling. Repeat."
    },
    {
      "name": "Reverse Grip Triceps Pushdown",
      "type": "strength",
      "muscle": "triceps",
      "equipment": "cable",
      "difficulty": "intermediate",
      "instructions": "Start by setting a bar attachment (straight or e-z) on a high pulley machine. Facing the bar attachment, grab it with the palms facing up (supinated grip) at shoulder width. Lower the bar by using your lats until your arms are fully extended by your sides. Tip: Elbows should be in by your sides and your feet should be shoulder width apart from each other. This is the starting position. Slowly elevate the bar attachment up as you inhale so it is aligned with your chest. Only the forearms should move and the elbows/upper arms should be stationary by your side at all times. Then begin to lower the cable bar back down to the original staring position while exhaling and contracting the triceps hard. Repeat for the recommended amount of repetitions.  Variation: This exercise can also be performed with a single handle using one arm at a time. This will allow you to better isolate the triceps. With this version you can self spot yourself by placing your hand over your forearm and applying some pressure to help you perform more reps than before."
    },
    {
      "name": "Push-Ups - Close Triceps Position",
      "type": "strength",
      "muscle": "triceps",
      "equipment": "body_only",
      "difficulty": "intermediate",
      "instructions": "Lie on the floor face down and place your hands closer than shoulder width for a close hand position. Make sure that you are holding your torso up at arms' length. Lower yourself until your chest almost touches the floor as you inhale. Using your triceps and some of your pectoral muscles, press your upper body back up to the starting position and squeeze your chest. Breathe out as you perform this step. After a second pause at the contracted position, repeat the movement for the prescribed amount of repetitions.  Variations:  If you are new at this exercise and do not have the strength to perform it, you can either bend your legs at the knees to take off resistance or perform the exercise against the wall instead of the floor. For the most advanced lifters, you can place your feet at a high surface such as a bench in order to increase the resistance.  See Also: Push-Up"
    },
    {
      "name": "Kneeling cable triceps extension",
      "type": "strength",
      "muscle": "triceps",
      "equipment": "cable",
      "difficulty": "intermediate",
      "instructions": "Place a bench sideways in front of a high pulley machine. Hold a straight bar attachment above your head with your hands about 6 inches apart with your palms facing down. Face away from the machine and kneel. Place your head and the back of your upper arms on the bench. Your elbows should be bent with the forearms pointing towards the high pulley. This will be your starting position. While keeping your upper arms close to your head at all times with the elbows in, press the bar out in a semicircular motion until the elbows are locked and your arms are parallel to the floor. Contract the triceps hard and keep this position for a second. Exhale as you perform this movement. Slowly return to the starting position as you breathe in. Repeat for the recommended amount of repetitions.  Variation: You can also perform this exercise with exercise bands."
    },
    {
      "name": "Single-arm cable triceps extension",
      "type": "strength",
      "muscle": "triceps",
      "equipment": "cable",
      "difficulty": "intermediate",
      "instructions": "With your right hand, grasp a single handle attached to the high-cable pulley using a supinated (underhand; palms facing up) grip. You should be standing directly in front of the weight stack. Now pull the handle down so that your upper arm and elbow are locked in to the side of your body. Your upper arm and forearm should form an acute angle (less than 90-degrees). You can keep the other arm by the waist and you can have one leg in front of you and the other one back for better balance. This will be your starting position. As you contract the triceps, move the single handle attachment down to your side until your arm is straight. Breathe out as you perform this movement. Tip: Only the forearms should move. Your upper arms should remain stationary at all times. Squeeze the triceps and hold for a second in this contracted position. Slowly return the handle to the starting position. Repeat for the recommended amount of repetitions and then perform the same movement with the other arm.  Variations: You can use exercise bands to perform this exercise."
    }

  ]);

  console.log('exercises seeded');

  await User.deleteMany();

  await User.create({
    username: 'PWashington',
    firstName: 'Pamela',
    lastName: 'Washington',
    email: 'pamela@testmail.com',
    password: 'password12345',
    savedExercise: [
      {
        exercises: [exercises[0]._id, exercises[3]._id, exercises[1]._id],
      }
    ]
  });

  await User.create({
    username: 'EHolt',
    firstName: 'Elijah',
    lastName: 'Holt',
    email: 'eholt@testmail.com',
    password: 'password12345'
  });

  console.log('users seeded');

  process.exit();
});
