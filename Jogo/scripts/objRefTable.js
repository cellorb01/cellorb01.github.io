const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Behaviors.Bullet,
		C3.Behaviors.wrap,
		C3.Behaviors.Car,
		C3.Behaviors.solid
	];
};
self.C3_JsPropNameTable = [
	{Moto: 0},
	{Projétil: 0},
	{DarAVolta: 0},
	{Carro: 0},
	{Moto1: 0},
	{Sólido: 0},
	{Estrada: 0},
	{Céu: 0}
];

self.InstanceType = {
	Moto: class extends self.ISpriteInstance {},
	Moto1: class extends self.ISpriteInstance {},
	Estrada: class extends self.ISpriteInstance {},
	Céu: class extends self.ISpriteInstance {}
}