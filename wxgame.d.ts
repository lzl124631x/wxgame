type Object = any;
declare namespace WxGame {
    interface Canvas {
        // 画布的宽度
        width: number;

        // 画布的高度
        height: number;

        //将当前 Canvas 保存为一个临时文件，并生成相应的临时文件路径。
        toTempFilePath(object: Object): string;

        //获取画布对象的绘图上下文
        getContext(contextType: string, contextAttributes: Object): CanvasRenderingContext2D | WebGLRenderingContext;

        //把画布上的绘制内容以一个 data URI 的格式返回
        toDataURL(): string;

    }

    interface CanvasToTempFilePathParameter {
        // 截取 canvas 的左上角横坐标
        // 默认值: 0
        x: number;

        // 截取 canvas 的左上角纵坐标
        // 默认值: 0
        y: number;

        // 截取 canvas 的宽度
        // 默认值: canvas 的宽度
        width: number;

        // 截取 canvas 的高度
        // 默认值: canvas 的高度
        height: number;

        // 目标文件的宽度，会将截取的部分拉伸或压缩至该数值
        // 默认值: canvas 的宽度
        destWidth: number;

        // 目标文件的高度，会将截取的部分拉伸或压缩至该数值
        // 默认值: canvas 的高度
        destHeight: number;

        // 目标文件的类型
        // 默认值: png
        fileType: string;

        // jpg图片的质量，仅当 fileType 为 jpg 时有效。取值范围为 0.0（最低）- 1.0（最高），不含 0。不在范围内时当作 1.0
        // 默认值: 1.0
        quality: number;

        // 接口调用成功的回调函数
        success: () => void;

        // 接口调用失败的回调函数
        fail: () => void;

        // 接口调用结束的回调函数（调用成功、失败都会执行）
        complete: () => void;
    }

    interface Static {
        //创建一个画布对象。首次调用创建的是显示在屏幕上的画布，之后调用创建的都是离屏画布。
        createCanvas(): Canvas;
        vibrateShort(): void;
    }
}

declare const wx: WxGame.Static;
export = wx;
export as namespace wx;